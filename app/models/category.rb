class Category < ApplicationRecord
  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :category_id

  has_many :subcategories,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :parent_category_id

  belongs_to :parent_category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :parent_category_id,
    optional: true

  has_many :child_events,
    through: :subcategories,
    source: :events

end
