class UserMailer < ActionMailer::Base
  default from: "contact.elevate.africa@gmail.com"

  def contact_email(f_name, l_name, email, subject, message)
    @first_name = f_name
    @last_name = l_name
    @message = message
    @email = email
    @subject = subject
    mail(to: "contact.elevate.africa@gmail.com", subject: subject)
  end
end
