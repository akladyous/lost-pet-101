class UserProfileSerializer < ActiveModel::Serializer
    attributes :first_name, :last_name, :home_phone, :cell_phone, :job_title, :company, :website, :blog

    belongs_to :user
end
