class AddEmailToDonations < ActiveRecord::Migration
  def change
    add_column :donations, :email, :string, default: ""
  end
end
