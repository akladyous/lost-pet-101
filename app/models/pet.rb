class Pet < ApplicationRecord

    validates :size, inclusion: {in: %w[small medium large], message: "%{value} is not a valid size" }
    validates :species, inclusion: {in: %w[dog cat bird ferret pig reptiles horse], message: "%{value} is not a valid species" }
    validates :gender, inclusion: {in: %w[male female, unknown], message: "%{value} is not a valid gender" }
end
