class ListingSerializer < ActiveModel::Serializer
  attributes :id, :listing_type, :published_at, :description
  has_one :user
  has_one :pet
end
