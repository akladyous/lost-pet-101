class FeedbackMailer < ApplicationMailer

    # Subject can be set in your I18n file at config/locales/en.yml
    # with the following lookup:
    #
    #   en.feedback_mailer.send_feedback.subject
    #
    def send_feedback feedback_instance
        # @feedback = Feedback.find(feedback.id)
        @feedback = feedback_instance
        mail to: "akladyous@gmail.com", subject: "Pet Finder Feedback"
    end

    def thanks feedback_instance
        @feedback = feedback_instance
        mail to: @feedback.email, subject: "Your Feedback from Pet Finder"
    end
end
