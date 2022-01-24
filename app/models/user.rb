class User < ApplicationRecord
    has_secure_password

    has_one :user_profile, dependent: :destroy
    has_one :user_address, dependent: :destroy

    has_many :listing_infos
    has_one :pet, through: :listing_infos

    # validates :size, inclusion: {in: %w[small medium large], message: "%{value} is not a valid size" }
    # validates :species, inclusion: {in: %w[dog cat bird ferret pig reptiles horse], message: "%{value} is not a valid species" }
    # validates :gender, inclusion: {in: %w[male female, unknown], message: "%{value} is not a valid gender" }
end
