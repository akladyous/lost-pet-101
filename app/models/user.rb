class User < ApplicationRecord
    has_secure_password

    has_one :user_profile
    has_one :user_address
end
