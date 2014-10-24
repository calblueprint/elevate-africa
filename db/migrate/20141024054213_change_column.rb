class ChangeColumn < ActiveRecord::Migration
  def change
    change_column :buzzes, :box_size, :integer
  end
end
