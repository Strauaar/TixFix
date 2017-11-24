class Venue < ApplicationRecord

  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :venue_id
end
