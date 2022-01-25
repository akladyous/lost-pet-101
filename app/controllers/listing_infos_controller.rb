class ListingInfosController < ApplicationController
    skip_before_action :authenticate_user, only: [:show, :create, :update, :destroy] 
    before_action :load_listing_info, only: [:show, :update, :destroy]

    def index
        render json: ListingInfo.where(id: current_user.listing_infos.ids).includes(:user, :pet), status: :ok
    end

    def show
        if @listing_info && current_user.listing_infos.ids.include?(@listing_info.id)
            render json: @listing_info, status: :ok
        else
            render json: {error: "Record not found"}, status: :not_found
        end
    end

    def create
        @pet = Pet.find_by_id!(params.require(:pet).permit(:pet_id)[:pet_id])
        if @pet
            @listing_info = current_user.listing_infos.new(listing_info_params.except(:pet_id, :id))
            @listing_info.pet = @pet
            if @listing_info.save!
                render json: @listing_info, status: :ok
            else
                render_unprocessable
            end
        else
            render json: {error: "Pet not found"}, status: unprocessable_entity
        end
    end
    def update
        if @listing_info && current_user.listing_infos.ids.include?(@listing_info.id)
            @listing_info.update(
                listing_type: listing_info_params[:listing_type],
                published: listing_info_params[:published],
                published_at: Time.parse(listing_info_params[:published_at])
            )
            if @listing_info.save
                render json: @listing_info, status: :ok
            else
                render json: {error: "Unable to update Listing record"}, status: :unprocessable_entity
            end
        else
            render_unprocessable
        end
    end

    def destroy
        if @listing_info && current_user.listing_infos.ids.include?(@listing_info.id)
            @listing_info.destroy
            if @listing_info.destroyed?
                render json: {}, status: :ok
            else
                render_unprocessable
            end
        end
    end

    private
    def listing_info_params
        params.permit(:id, :listing_type, :published, :published_at)
    end

    def load_listing_info
        @listing_info = ListingInfo.find_by_id!(listing_info_params[:id])
    end
end
