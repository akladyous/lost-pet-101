class UserSerializer < ActiveModel::Serializer
  attributes :user_name, :email, :password
end
