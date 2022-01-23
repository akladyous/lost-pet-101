class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :species
      t.string :name
      t.string :age
      t.string :size
      t.text :description
      t.string :breed
      t.string :gender
      t.string :color
      t.integer :microchip
      t.integer :height
      t.integer :weight
      t.string :coat
      t.boolean :collar

      t.timestamps
    end
  end
end
