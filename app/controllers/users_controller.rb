class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:show, :create] #, :email


    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "Unauthorized User"}, status: :unauthorized
        end
    end

    def create_user_profile

        if current_user
            if params.has_key?(:user_profile)
                @profile_params = params.require(:user_profile).permit(:first_name, :last_name, :home_phone, :cell_phone, :job_title, :company, :website, :blog)
                @user_profile = current_user.create_user_profile(@profile_params)
                @user_profile.save!
            end
            if params.has_key?(:user_address)
                @address_params = params.require(:user_address).permit(:address1, :address2, :city, :zip_code, :state)
                @user_address = current_user.create_user_address(@address_params)
                @user_address.save!
            end
            if @user_profile.persisted? || @user_address.persisted?
                render json: current_user, status: :ok
            else
                render_unprocessable
            end
        else
            render json: {error: "Unauthorized User"}, status: :unauthorized
        end
    end

    def update_user_profile
    end

    def create
        # debugger
        @params_user = params.permit(:user_name, :email, :password, :password_confirmation, :avatar)
        @user = User.new(@params_user)
        if @user.save! # @user.valid?
            if params.has_key?(:user_profile)
                @params_user_profile = params.require(:user_profile).permit(:first_name, :last_name, :home_phone, :cell_phone, :job_title, :company, :website, :blog)
                @user.create_user_profile(@params_user_profile)
            end
            if params.has_key?(:user_address)
                @params_user_address = params.require(:user_address).permit(:address1, :address2, :city, :zip_code, :state)
                @user.create_user_address(@params_user_address)
            end
            session[:user_id] = @user.id
            # send welcome email
            render json: @user, status: :created
            # render json: {message: "Account successfully created", date_time: Time.now, email: current_user.email}, status: :ok
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
