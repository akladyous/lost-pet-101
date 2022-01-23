class User < ApplicationRecord
    has_secure_password

    has_one :user_profile
    has_one :user_address

    has_many :listing_infos
    has_many :pets, through: :listing_infos

end
