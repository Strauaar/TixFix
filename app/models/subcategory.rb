class Subcategory < ApplicationRecord

  belongs_to :category,
    primary_key: :id,
    class_name: :Category,
    foreign_key: :category_id
    
end
