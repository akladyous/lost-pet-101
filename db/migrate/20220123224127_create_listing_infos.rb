class CreateListingInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :listing_infos do |t|
      t.string :listing_type
      t.boolean :published
      t.datetime :published_at, default: Time.now
      t.references :user, null: false, foreign_key: true
      t.references :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
