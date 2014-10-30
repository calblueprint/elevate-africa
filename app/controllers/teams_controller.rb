class TeamsController < ApplicationController
  def show
    @team = Team.find params[:id]
    @campaign = @team.campaign
  end

  def new
  end

  def create
  end

  def edit
    @team = Team.find params[:id]
  end

  def update
    @team = Team.find params[:id]
    if @team.update_with_password team_params
      flash[:success] = "You've updated your team!"
      sign_in(@team, bypass: true)
      redirect_to after_sign_in_path_for @team
    else
      render 'edit'
    end
  end

  def destroy
  end

  private

  def team_params
    params.require(:team).permit(:name, :email, :password,
                                 :password_confirmation, :current_password)
  end
end
