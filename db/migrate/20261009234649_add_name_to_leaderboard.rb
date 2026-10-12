class AddNameToLeaderboard < ActiveRecord::Migration[8.1]
  def change
    add_column :leaderboards, :name, :string
  end
end
