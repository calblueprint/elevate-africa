
class TeamsController < ApplicationController
  before_action :validate_team, only: [:edit, :update, :destroy]
  def new
    if current_user
      flash[:info] = "You've already signed in!"
      redirect_to after_sign_in_path_for current_user
    end
    @team = Team.new
  end

  def create
    @team = Team.new team_params
    if @team.save
      flash[:success] = "You've created a new team! Time for adventure!"
      sign_in @team, bypass: true
      redirect_to after_sign_in_path_for @team
    else
      render "new"
    end
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    @team = Team.find params[:id]
    if @team.update_attributes team_params
      flash[:success] = "You've updated your team!"
      sign_in(@team, bypass: true)
      redirect_to after_sign_in_path_for @team
    else
      render "edit"
    end
  end

  def destroy
    team = Team.find_by id: params[:id]
    if team
      team.destroy
      flash[:success] = "You've deleted your campaign!"
      redirect_to root_path
    end
  end

  private

  def team_params
    params.require(:team).permit(:name, :email, :password,
                                 :password_confirmation)
  end

  def validate_team
    @team = Team.find_by id: params[:id]
    if current_user.nil? || current_user != @team
      flash[:error] = "You don't have permission to do that action!"
      redirect_to root_path
    end
end
