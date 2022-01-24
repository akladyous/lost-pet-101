class ListingInfo < ApplicationRecord
    belongs_to :user
    belongs_to :pet

    has_one :listing, dependent: :destroy
    has_one :listing_comment, through: :listing, dependent: :destroy
    has_one :listing_address, through: :listing, dependent: :destroy

    # validates :listing_type, inclusion: {in: %w[lost found]}
end
