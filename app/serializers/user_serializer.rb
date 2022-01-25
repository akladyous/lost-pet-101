class UserSerializer < ActiveModel::Serializer
    attributes :user_name, :email


    has_one :user_profile #, serializer: UserProfileSerializer
    has_one :user_address #, serializer: UserAddressSerializer
    # has_one :pet, through: :listing_infos
end
