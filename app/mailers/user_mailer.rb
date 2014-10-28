class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def contact_email(person)
    @person = user
    mail(to: @person.email, subject: @person.subject)
  end
end
