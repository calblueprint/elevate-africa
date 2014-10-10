class ChangePostToBuzz < ActiveRecord::Migration
  def change
    rename_table :posts, :buzzes
  end
end
