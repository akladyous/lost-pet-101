class Pet < ApplicationRecord
    has_one :listing_info
    has_one :user, through: :listing_info
    has_one :user, through: :listing_request

    has_many :listing_requests
    has_many :users, through: :listing_requests
    
    has_one_attached :image_file, service: :amazon


    validates :size, inclusion: {in: %w[small medium large], message: "%{value} is not a valid size" }
    validates :species, inclusion: {in: %w[dog cat], message: "%{value} is not a valid species" }
    validates :gender, inclusion: {in: ["male", "female", "unknown"], message: "%{value} is not a valid gender" }


    def is_attached?
        self.image_file.attached?
    end

end
