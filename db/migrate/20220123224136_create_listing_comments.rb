class CreateListingComments < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_comments do |t|
      t.text :comment
      t.integer :likes
      t.string :tags
      t.references :listing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
