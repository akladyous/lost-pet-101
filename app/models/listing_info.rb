class ListingInfo < ApplicationRecord
    belongs_to :user
    belongs_to :pet

    has_one :listing
end
