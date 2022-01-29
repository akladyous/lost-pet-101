class ListingCommentSerializer < ActiveModel::Serializer
    attributes :id, :comment, :likes, :tags
    belongs_to :listing
end
