class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.timestamps
      t.text :content
      t.belongs_to :user
      t.string :video_link
      t.string :title
      t.string :subtitle
    end
  end
end
