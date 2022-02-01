class PetSerializer < ActiveModel::Serializer
  attributes :id, :species, :name, :age, :size, :description, :breed, :gender, :color, :microchip, :height, :weight, :coat, :collar
end
