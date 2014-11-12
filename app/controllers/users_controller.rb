class UsersController < ApplicationController
  before_filter :valid_user

  def show
    @user = User.find params[:id]
    @campaign = @user.campaign unless @user.admin?
    @image = @user.picture_url
  end

  def edit
  end

  def update
    if @user.update_with_password user_params
      flash[:success] = "You've successfully updated your profile!"
      redirect_to after_sign_in_path_for @user
    else
      render 'edit'
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :picture,
                                 :password_confirmation, :current_password)
  end

  def valid_user
    @user = User.find params[:id]
    unless current_user && current_user == @user
      flash[:error] = "You can't access this page!"
      redirect_to root_path
    end
  end
end
