class CommentIndex < ActiveRecord::Migration
  def change
    add_index :comments, :campaign_id
  end
end
