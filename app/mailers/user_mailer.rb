class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #
    default from: 'no-reply@petfinder.com'

    def welcome user
        @user = User.find(user.id)
        mail to: @user.email, subject: "Account Registration"
    end
end
