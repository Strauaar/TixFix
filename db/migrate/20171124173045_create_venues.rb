class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.string :city
      t.string :state 
      t.timestamps
    end
  end
end
