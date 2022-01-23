class ListingCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :likes, :tags
  has_one :listing
end
