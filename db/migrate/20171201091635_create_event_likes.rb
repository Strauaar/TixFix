class CreateEventLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :event_likes do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :event_likes, :user_id
    add_index :event_likes, :event_id
  end
end
