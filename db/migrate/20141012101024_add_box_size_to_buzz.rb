class AddBoxSizeToBuzz < ActiveRecord::Migration
  def change
    add_column :buzzes, :box_size, :integer, default: 1
  end
end
