class AddColumnToAchievement < ActiveRecord::Migration
  def change
    add_column :achievements, :description, :string, default: ""
  end
end
