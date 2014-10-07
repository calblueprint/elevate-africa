class ChangeColumnNames < ActiveRecord::Migration
  def change
    rename_column :buzzes, :title, :headline
    rename_column :buzzes, :subtitle, :subhead
  end
end
