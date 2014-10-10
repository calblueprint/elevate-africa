class AddImageToBuzz < ActiveRecord::Migration
  def change
    add_column :buzzes, :picture, :string
  end
end
