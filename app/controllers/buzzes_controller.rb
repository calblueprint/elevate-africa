class BuzzesController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create, :edit, :destroy]

  def index
  end

  def new
    @buzz = Buzz.new
  end

  private

  def authenticate_admin!
    current_user.is_admin?
  end
end
