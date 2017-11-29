class Ticket < ApplicationRecord
  validates :seller_id, :event_id, :price, presence: true

  belongs_to :buyer,
    primary_key: :id,
    class_name: :User,
    foreign_key: :buyer_id,
    optional: true

  belongs_to :seller,
    primary_key: :id,
    class_name: :User,
    foreign_key: :seller_id

  belongs_to :event,
    primary_key: :id,
    class_name: :Subevent,
    foreign_key: :event_id
    
end
