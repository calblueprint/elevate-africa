class ChangeAchievement < ActiveRecord::Migration
  def change
    remove_column :achievements, :team_id
    remove_column :achievements, :badge
    add_column :achievements, :name, :integer
  end
end
