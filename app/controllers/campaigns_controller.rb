class CampaignsController < ApplicationController
  before_filter :authenticate_team, except: [:index, :show]

  def index
    @campaigns = Campaign.all
  end

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = Campaign.new(campaign_params)
    if @campaign.save
      redirect_to @campaign
    else
      render "new"
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
    @donations = @campaign.donations
    @team = @campaign.team
    @total_donations = @campaign.get_total_donations
  end

  def edit
    @campaign = Campaign.find(params[:id])
  end

  def update
    @campaign = Campaign.find(params[:id])
    if @campaign.update(campaign_params)
      redirect_to @campaign
    else
      render "edit"
    end
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy
    redirect_to campaigns_path
  end

  private
    def campaign_params
      params.require(:campaign).permit(:name, :goal, :description, :deadline, :picture, :team_id)
    end

    def authenticate_team
      if !current_user || !current_user.team?
        flash[:error] = "You need to be logged into a team!"
        redirect_to campaigns_path
      end
    end
end
