class CreateListingRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_requests do |t|
      t.text :message, null: false
      t.references :pet, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
