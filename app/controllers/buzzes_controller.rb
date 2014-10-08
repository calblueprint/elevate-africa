class BuzzesController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create, :edit, :destroy]

  def index
    @buzzes = Buzz.all
  end

  def show
    @buzz = Buzz.find params[:id]
  end

  def new
    @buzz = Buzz.new
  end

  def create
    @buzz = Buzz.new buzz_params
    if @buzz.save
      flash[:success] = "You've created a buzz post!"
      redirect_to buzz_path @buzz
    else
      render 'new'
    end
  end

  def edit
    @buzz = Buzz.find params[:id]
  end

  def update
    @buzz = Buzz.find params[:id]
    if @buzz.update_attributes(buzz_params)
      flash[:success] = "You've updated a buzz post!"
      redirect_to buzz_path @buzz
    else
      render 'edit'
    end
  end

  def destroy
    Buzz.find(params[:id]).destroy
    flash[:success] = "Sucessfully destroyed buzz post!"
    redirect_to buzzes_path
  end

  private

  def authenticate_admin!
    if current_user.nil? || !current_user.is_admin?
      flash[:error] = "You don't have access to this page!"
      redirect_to root_path
    end
  end

  def buzz_params
    params.require(:buzz).permit(:headline, :subhead, :content,
                                 :admin_id, :video_link)
  end
end
