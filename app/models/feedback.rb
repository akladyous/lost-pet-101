class Feedback < ApplicationRecord
    validates :name, :email, :comment, presence: true
end
