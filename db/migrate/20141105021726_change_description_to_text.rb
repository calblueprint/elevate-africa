class ChangeDescriptionToText < ActiveRecord::Migration
  def change
    remove_column :campaigns, :donation_id
    change_column :campaigns, :description, :text, default: ""
  end
end
