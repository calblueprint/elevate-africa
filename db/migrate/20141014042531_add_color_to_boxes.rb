class AddColorToBoxes < ActiveRecord::Migration
  def change
    add_column :buzzes, :box_color, :string
  end
end
