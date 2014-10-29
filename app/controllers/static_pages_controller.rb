class StaticPagesController < ApplicationController
  def index 
  end

  def contact_email
      UserMailer.contact_email(params[:contact_first], params[:contact_last], params[:contact_email], params[:contact_subject], params[:contact_message]).deliver
      render :action => :contact
  end
end
