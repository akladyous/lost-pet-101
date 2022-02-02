class Pet < ApplicationRecord
    has_one :listing_info
    has_one :user, through: :listing_info
    has_one_attached :image_file, service: :amazon


    def is_attached?
        self.image_file.attached?
    end


end
