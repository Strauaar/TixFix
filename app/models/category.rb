class Category < ApplicationRecord
  has_many :events,
    primary_key: :id,
    class_name: :Event,
    foreign_key: :category_id

  has_many :subcategories,
    primary_key: :id,
    class_name: :Subcategory,
    foreign_key: :category_id
    
end
