class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.string :name
      t.decimal :amount, precision: 9, scale: 2

      t.timestamps
    end
  end
end
