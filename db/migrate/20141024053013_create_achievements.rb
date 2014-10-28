class CreateAchievements < ActiveRecord::Migration
  def change
    create_table :achievements do |t|
      t.integer :team_id
      t.integer :badge

      t.timestamps
    end
  end
end
