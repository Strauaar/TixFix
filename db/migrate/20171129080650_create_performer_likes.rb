class CreatePerformerLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :performer_likes do |t|
      t.integer :performer_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :performer_likes, :performer_id
    add_index :performer_likes, :user_id
  end
end
