class ChangeKindColumn < ActiveRecord::Migration
  def change
    remove_column :campaigns, :kind
    add_column :campaigns, :kind, :integer, default: 0
  end
end
