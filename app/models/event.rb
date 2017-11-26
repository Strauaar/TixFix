class Event < ApplicationRecord
  validates :name, :category_id, :venue_id, presence: true

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

end
