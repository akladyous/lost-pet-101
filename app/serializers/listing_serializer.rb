class ListingSerializer < ActiveModel::Serializer
    attributes :id, :date_lost_found, :msg_from, :description
    belongs_to :listing_info
    has_one :listing_address, serliazlier: ListingAddressSerializer
    has_one :listing_comment, serlializer: ListingCommentSerializer

    def addresses
        if object.listing_address
            ActiveModel::SerializableResource.new(object.listing_address, serializer: ListingAddressSerializer) 
        end
    end
end
