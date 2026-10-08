class ChangeColumnsOfAnswer < ActiveRecord::Migration[8.1]
  def change
    change_column :answers, :min_width, :decimal, precision: 4, scale: 2
    change_column :answers, :max_width, :decimal, precision: 4, scale: 2
    change_column :answers, :min_height, :decimal, precision: 4, scale: 2
    change_column :answers, :max_height, :decimal, precision: 4, scale: 2
  end
end
