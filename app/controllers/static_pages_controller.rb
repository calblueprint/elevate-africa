class StaticPagesController < ApplicationController
  def index
  end

  def contact_email
    UserMailer.contact_email(params[:contact_first],
                             params[:contact_last],
                             params[:contact_email_address],
                             params[:contact_subject],
                             params[:contact_message]).deliver
    flash[:notice] = "Thanks for sending us an email. We'll get back to you soon!"
    redirect_to root_path
  end
end
