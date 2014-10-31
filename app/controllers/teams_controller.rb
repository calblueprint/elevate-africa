class TeamsController < ApplicationController
  def show
    @team = Team.find params[:id]
    @campaign = @team.campaign
  end

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
  end

  private

  def team_params
    params.require(:team).permit(:name, :email, :password,
                                 :password_confirmation)
  end
end
