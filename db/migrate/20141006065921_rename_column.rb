class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :posts, :user_id, :admin_id
  end
end
