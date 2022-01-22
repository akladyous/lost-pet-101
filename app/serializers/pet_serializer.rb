class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :size, :species, :description, :breed, :gender, :color, :microchip, :height, :weight, :coat_type, :collar
end
