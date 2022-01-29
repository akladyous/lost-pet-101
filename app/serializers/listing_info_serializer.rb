class ListingInfoSerializer < ActiveModel::Serializer
    attributes :id, :listing_type, :published, :published_at
    has_one :user
    has_one :pet
    has_one :listing, serializer: ListingSerializer
    has_one :listing_address, through: :listing
    has_one :listing_comment, through: :listing
end
