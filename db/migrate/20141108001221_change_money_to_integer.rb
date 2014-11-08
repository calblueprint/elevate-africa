class ChangeMoneyToInteger < ActiveRecord::Migration
  def change
    change_column :campaigns, :goal, :integer
  end
end
