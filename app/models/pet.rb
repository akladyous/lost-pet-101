class Pet < ApplicationRecord

    has_one :listing_info
    has_one :user, through: listing_info
end
