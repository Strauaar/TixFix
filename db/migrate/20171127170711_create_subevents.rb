class CreateSubevents < ActiveRecord::Migration[5.1]
  def change
    create_table :subevents do |t|
      t.integer :event_id, null: false
      t.string :name
      t.integer :venue_id
      t.integer :category_id
      t.string :image_url
      t.datetime :date
      t.integer :performer_id
      t.timestamps
    end
    add_index :subevents, :event_id
    add_index :subevents, :venue_id
    add_index :subevents, :category_id
    add_index :subevents, :performer_id
  end
end
