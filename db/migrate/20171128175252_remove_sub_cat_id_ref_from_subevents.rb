class RemoveSubCatIdRefFromSubevents < ActiveRecord::Migration[5.1]
  def change
    remove_column :subevents, :subcategory_id
  end
end
