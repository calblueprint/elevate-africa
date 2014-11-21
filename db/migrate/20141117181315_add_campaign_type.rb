class AddCampaignType < ActiveRecord::Migration
  def change
    add_column :campaigns, :type, :integer
  end
end
