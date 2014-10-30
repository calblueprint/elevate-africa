class AddTeamId < ActiveRecord::Migration
  def change
    add_column :campaigns, :team_id, :integer
  end
end
