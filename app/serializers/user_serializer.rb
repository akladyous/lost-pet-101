class UserSerializer < ActiveModel::Serializer
    attributes :user_name, :email, :image_url


    has_one :user_profile #, serializer: UserProfileSerializer
    has_one :user_address #, serializer: UserAddressSerializer
    # has_one :pet, through: :listing_infos
    def image_url
        # debugger
        # if object.is_attached?
        if object.avatar.attached?
            Rails.application.routes.url_helpers.rails_blob_url(self.object.avatar.blob, only_path: true)
            # object.avatar.blob.url
        else
            nil
        end
    end
end
