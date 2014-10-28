class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content
      t.integer :campaign_id
      t.string :first_name
      t.string :last_name
      t.string :email

      t.timestamps
    end
  end
end
