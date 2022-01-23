class CreateUserAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :user_addresses do |t|
      t.string :address1
      t.string :address2
      t.string :city
      t.string :zip_code
      t.string :state
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
