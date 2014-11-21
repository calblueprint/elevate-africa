class DonationsController < ApplicationController
  def new
    @campaign = Campaign.find_by id: params[:campaign]
    @donation = Donation.new
  end

  def create
    @campaign = Campaign.find_by id: donation_params[:campaign_id]
    @donation = Donations.new donation_params
    if @donation.save
      customer = Stripe::Customer.create email: params[:stripeEmail],
                                         card: params[:stripeToken]
      Stripe::Charge.create customer: customer, amount: params[:donation][:amount],
                            description: "Elevate Africa Campaign Donation", currency: "usd"
      flash[:success] = "Thanks for helping these adventurers out!"
      redirect_to @campaign
    else
      render "new"
    end
  rescue Stripe::CardError => e
    flash[:error] = e.message
    puts "CardError! #{e.message}"
    redirect_to new_campaign_donation(@campaign)
  end

  def show
    @campaign = Campaign.find(params[:campaign_id])
    @donation = @campaign.donations.find(params[:id])
  end


  private
    def donation_params
      params.require(:donation).permit(:name, :email, :amount)
    end
end
