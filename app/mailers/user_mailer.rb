class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def contact_email(f_name, l_name, email, subject, message)
    @first_name = f_name
    @last_name = l_name
    @message = message
    @email = email
    mail(to: 'triciasfu@gmail.com', subject: subject)
  end
end
