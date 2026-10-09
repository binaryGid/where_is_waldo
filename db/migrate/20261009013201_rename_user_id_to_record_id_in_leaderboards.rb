class RenameUserIdToRecordIdInLeaderboards < ActiveRecord::Migration[8.1]
  def change
    rename_column :leaderboards, :user_id, :record_id
  end
end
