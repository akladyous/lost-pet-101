class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :listing_type
      t.datetime :published_at
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
