class AddAssociationToLeaderboard < ActiveRecord::Migration[8.1]
  def change
    add_reference :leaderboards, :photo, null: false, foreign_key: true
  end
end
