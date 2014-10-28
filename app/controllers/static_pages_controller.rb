class StaticPagesController < ApplicationController
  def index 
  end

  def contact_email
    UserMailer.contact_email.deliver
  end
end
