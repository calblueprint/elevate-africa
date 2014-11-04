class AddPictureToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :picture, :string
  end
end
