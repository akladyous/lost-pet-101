class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unique


    private
    def authenticate_user
        unless current_user
            render json: {error: "User not authorized"}, status: :unauthorized
        end
    end
    def current_user
        @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end
    def login user
        session[:user_id] = user.id
    end
    def logout
        session.delete :user_id
    end
    def invalid_record(exception)
        render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
    def record_not_found(exception)
        debugger
        render json: {error: exception.errors.full_messages}, status: :not_found
    end
    def record_not_unique(exception)
        render json: {error: exception.errors.full_messages}, status: :unprocessable_entity
    end
end
