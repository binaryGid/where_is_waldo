class CreateLeaderboards < ActiveRecord::Migration[8.1]
  def change
    create_table :leaderboards do |t|
      t.string :user_id
      t.datetime :start
      t.datetime :finish
      t.integer :duration

      t.timestamps
    end
  end
end
