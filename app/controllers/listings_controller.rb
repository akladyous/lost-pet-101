class ListingsController < ApplicationController
    before_action :current_listing, except: :create
    before_action :current_listing_info, only: :create

    def show
        render_ok @listing
    end

    def create
        @listing = @listing_info.create_listing(
            date_lost_found: params[:date_lost_found],
            msg_from: params[:msg_from],
            description: params[:description]
        )
        render_ok @listing
    end

    def update
        @listing.update(
            date_lost_found: params[:date_lost_found],
            msg_from: params[:msg_from],
            description: params[:description]
        )
        if @listing.save!
            render_ok @listing
        else
            render_unprocessable
        end
    end

    private
    def listing_params
        params.permit(:id, :listing_info_id, :date_lost_found, :msg_from, :description)
    end
    def current_listing
        @user_listing = Listing.where(listing_info: current_user.listing_infos.ids).ids
        unless @user_listing.include?(params[:id].to_i)
            render json: {error: "ListingInfo record not found"}, status: :not_found
        end
        @listing = Listing.find_by_id!(params[:id])
    end

    def current_listing_info
        listing_info_id = params.require(:listing_info).permit(:listing_info_id)[:listing_info_id]
        listing_info_exist = current_user.listing_infos.ids.include?(listing_info_id)
        listing_not_exist = Listing.where(listing_info: listing_info_id).ids.empty?
        # debugger
        unless listing_info_id
            render json: {error: "Missing ListingInfo ID"}, status: :unprocessable_entity
            return false
        end
        unless listing_info_exist && listing_not_exist
            render_unprocessable
        end
        @listing_info = ListingInfo.find_by_id!(listing_info_id)
    end
end
