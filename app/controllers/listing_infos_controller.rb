class ListingInfosController < ApplicationController
    # skip_before_action :authenticate_user, only: [:show, :create, :update, :destroy]
    skip_before_action :authenticate_user, only: [:public]
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

    def new_listing
        # debugger
        @pet_params = params.require(:pet).permit(:id, :species, :name, :age, :size, :description, :breed, :gender, :color, :microchip, :height, :weight, :coat, :collar)
        @listinginfo_params = params.require(:listing_info).permit(:listing_type, :published, :published_at)
        @listing_params = params.require(:listing).permit(:date_lost_found, :msg_from, :description)
        @listing_address_params = params.require(:listing_address).permit(:address1, :address2, :city, :zip_code, :state)

        @pet_record = Pet.new(@pet_params)
        @listing_info_record = current_user.listing_infos.new(@listinginfo_params)
        @listing_info_record.pet = @pet_record
        if @listing_info_record.save!
            @listing_record = Listing.new(@listing_params)
            @listing_address_record = ListingAddress.new(@listing_address_params)
            @listing_record.update(listing_info: @listing_info_record, listing_address: @listing_address_record)
        end
        
        if @listing_info_record.persisted? && @listing_record.persisted?
            render json: @listing_info_record, status: :ok
        else
            @pet_record.destroy
            @listing_info_record.destroy
            @listing_record.destroy
            render_unprocessable
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

    def public
        @all_listing_infos = ListingInfo.all #.includes(:listing).includes(:listing_address, :listing_comment)
        render json: @all_listing_infos, status: :ok
    end
    private
    def listing_info_params
        params.permit(:id, :listing_type, :published, :published_at)
    end

    def load_listing_info
        @listing_info = ListingInfo.find_by_id!(listing_info_params[:id])
    end

end




    # def create
    #     @pet = Pet.find_by_id!(params.require(:pet).permit(:pet_id)[:pet_id])
    #     if @pet
    #         @listing_info = current_user.listing_infos.new(listing_info_params.except(:pet_id, :id))
    #         @listing_info.pet = @pet
    #         if @listing_info.save!
    #             render json: @listing_info, status: :ok
    #         else
    #             render_unprocessable
    #         end
    #     else
    #         render json: {error: "Pet not found"}, status: unprocessable_entity
    #     end
    # end