class CreateContactUs < ActiveRecord::Migration[7.0]
  def change
    create_table :contact_us do |t|
      t.string :name
      t.string :email
      t.text :comment

      t.timestamps
    end
  end
end
