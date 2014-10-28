class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def contact_email
    mail(to: params[:'contact-email'], subject: params[:'contact-subject'])
  end
end
