class ListingInfo < ApplicationRecord
    belongs_to :user
    belongs_to :pet

    has_one  :listing, dependent: :destroy
    has_one  :listing_comment, through: :listing
    has_one  :listing_address, through: :listing

    validates :listing_type, inclusion: {in: %w[lost found]}

    scope :all_losts, -> { where(:listing_type => "lost")}
    scope :all_founds, -> { where(:listing_type => "found")}
end
