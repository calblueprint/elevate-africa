class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def contact_email
    mail(to: params[:contact_email], subject: params[:contact_subject])
  end
end
