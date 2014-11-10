class ChangeDeadlineToDuration < ActiveRecord::Migration
  def change
    remove_column :campaigns, :deadline
    add_column :campaigns, :duration, :integer
  end
end
