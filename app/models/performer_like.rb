class PerformerLike < ApplicationRecord
validates :performer_id, :user_id, presence: true

  belongs_to :performer,
    primary_key: :id,
    class_name: :Performer,
    foreign_key: :performer_id

  belongs_to :user,
    primary_key: :id,
    class_name: :User,
    foreign_key: :user_id

end
