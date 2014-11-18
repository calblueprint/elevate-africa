class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.timestamps
      t.integer :team_id
      t.integer :achievement_id

    end
    add_index :badges, :team_id
    add_index :badges, :achievement_id
  end
end
