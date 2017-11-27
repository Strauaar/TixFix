class Subcategory < ApplicationRecord

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :category_id

  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :subcategory_id

end
