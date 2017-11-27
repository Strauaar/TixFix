class AddSubCategoryColumnToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :subcategory_id, :integer
    add_column :subevents, :subcategory_id, :integer
  end
end
