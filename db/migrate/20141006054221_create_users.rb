class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.timestamps

      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :password
      t.string :username
    end
  end
end
