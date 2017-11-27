class Event < ApplicationRecord
  validates :name, :category_id, presence: true

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :category_id

  belongs_to :performer,
    primary_key: :id,
    class_name: :Performer,
    foreign_key: :performer_id

  has_many :subevents,
    primary_key: :id,
    class_name: :Subevent,
    foreign_key: :event_id

end
