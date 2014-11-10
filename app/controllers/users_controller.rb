class UsersController < ApplicationController
  def edit
    @user = User.find params[:id]
  end

  def update
    1/0
  end
end
