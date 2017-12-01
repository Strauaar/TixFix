class RemoveSubCategoryIdEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :subcategory_id
  end
end
