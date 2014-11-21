class CampaignsController < ApplicationController
  # before_filter :authenticate_team, except: [:index, :show]
  before_action :authenticate_owner, only: [:edit, :update, :destroy]

  def index
    if params[:search]
      @search = params[:search]
      @campaigns = Campaign.search @search
    else
      @campaigns = Campaign.all
    end
    percentages = @campaigns.map do |c|
      [c.id, c.get_donation_percentage]
    end
    gon.push percentages: percentages
  end

  def new
    @campaign = Campaign.new
    @team = @campaign.build_team
  end

  def create
    params[:campaign][:goal] = params[:campaign][:goal].gsub(/\D/,"")

    if params[:picture_choose] != ""
      src = File.join(Rails.root, "/app/assets/images/" + params[:picture_choose])
      src_file = File.new(src)
      params[:campaign][:picture] = src_file
    end

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
  end

  def update
    if @campaign.update(campaign_params)
      redirect_to @campaign
    else
      render "edit"
    end
  end

  def destroy
    @campaign.destroy
    redirect_to campaigns_path
  end

  private
  def campaign_params
    params.require(:campaign).permit(:name, :duration, :goal, :description, :picture, :team_id)
  end

  def authenticate_team
    if !current_user || !current_user.team?
      flash[:error] = "You need to be logged into a team!"
      redirect_to campaigns_path
    end
  end

  def authenticate_owner
    @campaign = Campaign.find(params[:id])
    if !current_user.can_edit? @campaign
      flash[:error] = "You can't edit this team!"
      redirect_to campaigns_path
    end
  end
end
