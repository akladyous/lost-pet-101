class PetSerializer < ActiveModel::Serializer
  attributes :species, :name, :age, :size, :description, :breed, :gender, :color, :microchip, :height, :weight, :coat, :collar
end
