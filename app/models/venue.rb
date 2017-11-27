class Venue < ApplicationRecord

  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :venue_id

  has_many :subevents,
    primary_key: :id,
    class_name: :Subevent,
    foreign_key: :venue_id
end
