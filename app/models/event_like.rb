class EventLike < ApplicationRecord
  validates :event_id, :user_id, presence: true

  belongs_to :event,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :event_id

  belongs_to :user,
    primary_key: :id,
    class_name: :User,
    foreign_key: :user_id
end
