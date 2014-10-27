class AddTeamCampaignId < ActiveRecord::Migration
  def change
  	add_column :donations, :campaign_id, :integer
  	add_index :donations, :campaign_id

  	add_column :campaigns, :donation_id, :integer
  	add_index :campaigns, :donation_id
  end
end