class ChangeDeadlineType < ActiveRecord::Migration
  def change
    remove_column :campaigns, :deadline
    add_column :campaigns, :deadline, :datetime
  end
end
