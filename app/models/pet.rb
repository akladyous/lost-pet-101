class Pet < ApplicationRecord
    has_one :listing_info
    has_one :user, through: :listing_info
    has_one :user, through: :listing_request

    has_many :listing_requests
    has_many :users, through: :listing_requests
    
    has_one_attached :image_file, service: :amazon


    def is_attached?
        self.image_file.attached?
    end


end
