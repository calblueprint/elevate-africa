class ChangeTypeName < ActiveRecord::Migration
  def change
    remove_column :campaigns, :type
    add_column :campaigns, :kind, :integer

  end
end
