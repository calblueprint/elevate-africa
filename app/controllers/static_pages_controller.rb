class StaticPagesController < ApplicationController
  def index 
  end

  def contact_email
    UserMailer.contact_email(params[:first_name], params[:last_name], params[:email], params[:subject], params[:message]).deliver
  end
end
