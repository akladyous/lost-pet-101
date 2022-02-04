class User < ApplicationRecord
    has_secure_password

    has_one :user_profile, dependent: :destroy
    has_one :user_address, dependent: :destroy

    has_many :listing_infos, dependent: :destroy
    has_one  :listing, through: :listing_infos
    has_one  :pet, through: :listing_infos, dependent: :destroy

    has_many :listing_requests
    has_many :pets, through: :listing_requests

    validates :user_name, presence: true, length: {maximum: 25}, uniqueness: { case_sensitive: false }
    validates :email, presence: true, uniqueness: { case_sensitive: false }
    validates :password, confirmation: true, length: {minimum: 5}
    validates :password_confirmation, presence: true, length: {minimum: 5}
    # validates :size, inclusion: {in: %w[small medium large], message: "%{value} is not a valid size" }
    # validates :species, inclusion: {in: %w[dog cat bird ferret pig reptiles horse], message: "%{value} is not a valid species" }
    # validates :gender, inclusion: {in: %w[male female, unknown], message: "%{value} is not a valid gender" }

end
