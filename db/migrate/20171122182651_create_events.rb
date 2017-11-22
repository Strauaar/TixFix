class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.datetime :date, null: false
      t.string :details
      t.integer :venue_id, null: false
      t.integer :category_id, null: false
      t.timestamps
    end
    add_index :events, :venue_id
    add_index :events, :category_id
  end
end
