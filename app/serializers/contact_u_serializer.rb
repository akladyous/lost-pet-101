class ContactUSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :comment
end
