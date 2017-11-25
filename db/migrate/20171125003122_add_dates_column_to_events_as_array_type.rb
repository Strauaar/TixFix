class AddDatesColumnToEventsAsArrayType < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :dates, :datetime, array: true, default: [] 
  end
end
