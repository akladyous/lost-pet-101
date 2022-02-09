class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :comment
end
