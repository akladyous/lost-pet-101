class ListingSerializer < ActiveModel::Serializer
  attributes :id, :date_lost_found, :mesg_from, :description
  has_one :listing_info
end
