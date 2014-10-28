class AddDeadlineDescription < ActiveRecord::Migration
  def change
    add_column :campaigns, :description, :string
    add_column :campaigns, :deadline, :string
  end
end
