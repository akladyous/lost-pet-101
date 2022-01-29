class ListingAddressSerializer < ActiveModel::Serializer
    attributes :id, :address1, :address2, :city, :zip_code, :state
    belongs_to :listing

    
end
