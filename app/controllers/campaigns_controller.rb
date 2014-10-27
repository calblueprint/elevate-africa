class CampaignsController < ApplicationController
  def index
  end

  def new
  end

  def create
  	render plain: params[:campaign].inspect
  end
end