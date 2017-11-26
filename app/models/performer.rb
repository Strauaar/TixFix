class Performer < ApplicationRecord
  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :performer_id
end
