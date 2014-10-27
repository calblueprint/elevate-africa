class CampaignsController < ApplicationController
  def index
  	@campaigns = Campaign.all
  end

  def new
  end

  def create
   	@campaign = Campaign.new(campaign_params)
  	@campaign.save
  	redirect_to @campaign
  end

  def show
    @campaign = Campaign.find(params[:id])
  end

  private
    def campaign_params
      params.require(:campaign).permit(:name, :goal, :description, :deadline)
  	end
end