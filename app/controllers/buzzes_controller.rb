class BuzzesController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create, :edit, :destroy]

  def index
  end

  def new
    @buzz = Buzz.new
  end

  def create
    @buzz = Buzz.new buzz_params
    if @buzz.save
      flash[:success] = "You've created a buzz post!"
      redirect_to buzzes_path
    else
      render 'new'
    end
  end

  private

  def authenticate_admin!
    current_user.is_admin?
  end

  def buzz_params
    params.require(:buzz).permit(:headline, :subhead, :content,
                                 :admin_id, :video_link)
  end
end
