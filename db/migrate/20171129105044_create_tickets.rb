class CreateTickets < ActiveRecord::Migration[5.1]
  def change
    create_table :tickets do |t|
      t.integer :seller_id, null: false
      t.integer :buyer_id
      t.integer :event_id, null: false
      t.integer :price, null: false
      t.timestamps
    end
    add_index :tickets, :seller_id
    add_index :tickets, :buyer_id
    add_index :tickets, :event_id
  end
end
