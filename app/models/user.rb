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

end
