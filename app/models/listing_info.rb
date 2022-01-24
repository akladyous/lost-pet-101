class ListingInfo < ApplicationRecord
    belongs_to :user
    belongs_to :pet

    has_one :listing
    has_one :listing_comment, through: :listing
    has_one :listing_address, through: :listing

    # validates :listing_type, inclusion: {in: %w[lost found]}
end
