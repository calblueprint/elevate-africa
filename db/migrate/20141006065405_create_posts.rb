class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :content
      t.belongs_to :user
      t.string :video_link
      t.string :title
      t.string :subtitle

      t.timestamps
    end
  end
end
