class User < ApplicationRecord
  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  has_many :user_likes,
    primary_key: :id,
    class_name: :PerformerLike,
    foreign_key: :user_id

  has_many :performers_liked,
    through: :user_likes,
    source: :performer

  has_many :selling_tickets,
    primary_key: :id,
    class_name: :Ticket,
    foreign_key: :seller_id

  has_many :bought_tickets,
    primary_key: :id,
    class_name: :Ticket,
    foreign_key: :buyer_id

  has_many :events_attending,
    through: :bought_tickets,
    source: :event

  has_many :event_likes,
    primary_key: :id,
    class_name: :EventLike,
    foreign_key: :user_id

  has_many :events_liked,
    through: :event_likes,
    source: :event


  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.valid_password?(password)
      return user
    else
      return nil
    end
  end


  def sold_tickets
    self.selling_tickets.where("buyer_id IS NOT NULL")
  end
  def tickets_sold_price
    cumulative_price = self.sold_tickets.pluck(:price).inject(:+)
    cumulative_price
  end

  def upcoming_events
    self.events_attending.where("date > ?", DateTime.now)
  end

  def tickets_selling
    self.selling_tickets.where("buyer_id IS NULL")
  end

end
