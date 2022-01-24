class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found


    private
    def authenticate_user
        unless current_user
            render json: {error: "User not authorized"}, status: :unauthorized
        end
    end
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
    def invalid_record exception
        render json: {error: exception.record.errors.full_message}, status: :unprocessable_entity
    end
    def record_not_valid
        render json: {error: exception.errors.full_messages}, status: :not_found
    end
end
