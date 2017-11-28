class Category < ApplicationRecord
  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :category_id

  has_many :subcategories,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :parent_category_id

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :parent_category_id,
    optional: true

end
