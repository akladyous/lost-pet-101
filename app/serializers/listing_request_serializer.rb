class ListingRequestSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :pet
  has_one :user
end
