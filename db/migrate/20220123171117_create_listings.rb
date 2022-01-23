class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.datetime :date_lost_found
      t.text :mesg_from
      t.text :description
      t.references :listing_info, null: false, foreign_key: true

      t.timestamps
    end
  end
end
