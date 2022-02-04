class ListingRequestsController < ApplicationController
    skip_before_action :authenticate_user #, only: [:show, :create]
    
    
    def create
        @pet = Pet.find(request_params.dig(:pet, :pet_id))
        render_unprocessable unless current_user && @pet
        if @pet
            @listing_requests = ListingRequest.new(request_params.except(:pet))
            @listing_requests.pet  = @pet
            @listing_requests.user = current_user
            if @listing_requests.save!
                render json: @listing_requests, status: :ok
            else
                render_unprocessable
            end
        end
        
    end

    def index
        render json: current_user.listing_requests, status: :ok
    end
    def show
        # debugger
        if requests_belongs_to_current_user
            @listing_request = current_user.listing_requests.find(request_params[:id])
            render json: @listing_request, status: :ok
        else
            render_not_found
        end
    end

    def update
    end

    def destroy
        if requests_belongs_to_current_user
            @listing_request = current_user.listing_requests.find(request_params[:id])
            @listing_request.destroy
            render json: {}, status: :ok
        else
            render_unprocessable
        end

    end

    private
    def request_params
        params.permit(:message, :id, pet: [:pet_id]) 
    end
    def current_user_ids
        current_user.listing_requests.ids
    end
    def requests_belongs_to_current_user
        current_user_ids.include?(request_params[:id].to_i)
    end
end
