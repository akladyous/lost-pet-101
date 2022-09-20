class FeedbacksController < ApplicationController
    skip_before_action :authenticate_user, only: :create
    before_action :feedback_params

    def create
        @feedback = Feedback.new(feedback_params)
        if @feedback.save!
            FeedbackMailer.send_feedback(@feedback).deliver_now
            FeedbackMailer.thanks(@feedback).deliver_now
            render json: @feedback, status: :created
        else
            render json: {error: @feedback.errors.full_messages}, status: :unprocessable_entity
        end

    end


    def feedback_params
        params.permit(:name, :email, :comment)
    end
end
