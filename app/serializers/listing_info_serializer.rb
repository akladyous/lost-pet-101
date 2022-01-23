class ListingInfoSerializer < ActiveModel::Serializer
  attributes :id, :listing_type, :published, :published_at
  has_one :user
  has_one :pet
end
