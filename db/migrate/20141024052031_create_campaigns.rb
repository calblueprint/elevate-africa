class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :name
      t.decimal :goal, precision: 9, scale: 2

      t.timestamps
    end
  end
end
