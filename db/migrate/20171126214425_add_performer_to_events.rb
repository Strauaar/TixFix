class AddPerformerToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :performer_id, :integer, null:false
    add_index :events, :performer_id
  end
end
