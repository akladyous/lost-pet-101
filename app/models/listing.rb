class Listing < ApplicationRecord
    belongs_to :listing_info

    has_one :listing_address
    has_one :listing_comment
end
