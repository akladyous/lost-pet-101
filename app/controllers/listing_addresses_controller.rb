class ListingAddressesController < ApplicationController
    before_action :current_listing_create, only: :create
    before_action :current_listing, only: [:show, :update]

    def create
        # debugger
        if @listing.listing_address.nil?
            @listing_address = @listing.create_listing_address(listing_address_params)
            if @listing_address.save
                render json: @listing_address, status: :ok
            else
                render_unprocessable
            end
        else
            render json: {error: "Listing Address already exists"}, status: :unprocessable_entity
        end
    end

    def show
        render_ok @listing_address
    end

    def update
        @listing_address.update(listing_address_params)
        debugger
        if @listing_address.save!
            render_ok @listing_address
        else
            render_unprocessable
        end
    end

    private
    def listing_address_params
        params.permit(:id, :address1, :address2, :city, :zip_code, :state)
    end

    def current_listing
        # debugger
        @listing_address = ListingAddress.find_by_id!(params[:id])
        @user_listings = Listing.where(listing_info: current_user.listing_infos.ids).ids
        if @user_listings.include?(@listing_address.listing.id)
            @listing_address
        else
            render_unprocessable
        end
    end

    def current_listing_create
        listing_id = params.require(:listing).permit(:listing_id)[:listing_id]
        unless listing_id
            render json: {error: "Missing Listing ID"}, status: :unprocessable_entity
            return false
        end
        @user_listings = Listing.where(listing_info: current_user.listing_infos.ids).ids
        unless @user_listings.include?(listing_id.to_i)
            render json: {error: "ListingInfo record not found"}, status: :not_found
            return false
        end
        @listing = Listing.find_by_id!(listing_id)
    end
end
