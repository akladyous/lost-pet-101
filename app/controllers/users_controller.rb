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
        if @user.valid?
            @user.save!
            session[:user_id] = @user.id
            # send welcome email
            render json: @user, status: :created
        end
            render json: {error: "Registration Error"}, status: :unprocessable_entity
    end



    private
    def user_params
        params.permit(:user_name, :email, :password, :password_confirmation)
    end
end
