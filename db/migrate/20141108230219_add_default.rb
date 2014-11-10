class AddDefault < ActiveRecord::Migration
  def change
    add_index :achievements, :team_id
    add_index :buzzes, :admin_id
    add_index :campaigns, :team_id
    change_column :donations, :amount, :integer, default: 0
  end
end
