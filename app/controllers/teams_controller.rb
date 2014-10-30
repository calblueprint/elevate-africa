class TeamsController < ApplicationController
  def show
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
    if @team.update_attributes(team_params)
      flash[:success] = "You've updated your team!"
      redirect_to team_path(@team)
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
