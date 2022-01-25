class Listing < ApplicationRecord
    belongs_to :listing_info
    has_one :listing_address, dependent: :destroy
    has_one :listing_comment, dependent: :destroy
    has_one :user, through: :listing_info
end
