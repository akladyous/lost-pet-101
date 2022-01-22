class UserAddressSerializer < ActiveModel::Serializer
  attributes :id, :address1, :address2, :city, :zip_code, :state
  has_one :user
end
