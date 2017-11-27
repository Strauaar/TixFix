class Subevent < ApplicationRecord
  validates :name, :category_id, :venue_id, :event_id, presence: true

  belongs_to :venue,
    primary_key: :id,
    class_name: :Venue,
    foreign_key: :venue_id

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :category_id

  belongs_to :performer,
    primary_key: :id,
    class_name: :Performer,
    foreign_key: :performer_id

  belongs_to :event,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :event_id
end
