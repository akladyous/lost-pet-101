class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:show, :create] #, :email


    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "Unauthorized User"}, status: :unauthorized
        end
    end

    def create
        @user = User.new(user_params)
        # debuggerlogin
        if @user.save! # @user.valid?
            # @user.save!
            session[:user_id] = @user.id
            # send welcome email
            render json: @user, status: :created
        else
            # render json: {error: "Registration Error"}, status: :unprocessable_entity
            render json: {error: @user.errors.full_messages}, status: :unprocessable_entity
        end
    end



    private
    def user_params
        params.permit(:user_name, :email, :password, :password_confirmation)
    end
end
