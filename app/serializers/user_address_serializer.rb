class UserAddressSerializer < ActiveModel::Serializer
    attributes :address1, :address2, :city, :zip_code, :state
    
    belongs_to :user
end
