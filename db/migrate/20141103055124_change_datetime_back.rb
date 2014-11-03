class ChangeDatetimeBack < ActiveRecord::Migration
  def change
    remove_column :campaigns, :deadline
    add_column :campaigns, :deadline, :int
  end
end
