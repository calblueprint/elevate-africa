class ChangeColumnDammit < ActiveRecord::Migration
  def change
    change_column :buzzes, :box_size, :integer, default: nil
  end
end
