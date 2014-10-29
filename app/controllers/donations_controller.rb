class DonationsController < ApplicationController
  def index
    @campaign = Campaign.find(params[:campaign_id])
    @donations = @campaign.donations
  end

  def new
    @campaign = Campaign.find(params[:campaign_id])
    @donation = @campaign.donations.build
  end

  def create
    @campaign = Campaign.find(params[:campaign_id])
    @donation = @campaign.donations.build(donation_params)
    if @donation.save
      redirect_to @donation
    else
      render "new"
    end
  end

  def show
    @campaign = Campaign.find(params[:campaign_id])
    @donation = Donation.find(params[:id])
  end

  def edit
    @donation = Donation.find(params[:id])
  end

  def update
    @donation = Donation.find(params[:id])

    if @donation.update(donation_params)
      redirect_to @donation
    else
      render "edit"
    end
  end

  def destroy
    @donation = Donation.find(params[:id])
    @donation.destroy
    redirect_to donations_path
  end

  private
    def donation_params
      params.require(:donation).permit(:name, :amount)
    end
end
