class RemoveColumnsFromEvents < ActiveRecord::Migration[5.1]
  def change
    remove_column :events, :details
    remove_column :events, :dates
    remove_column :events, :venue_id
  end
end
