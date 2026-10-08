class CreateAnswers < ActiveRecord::Migration[8.1]
  def change
    create_table :answers do |t|
      t.decimal :min_width
      t.decimal :max_width
      t.decimal :min_height
      t.decimal :max_height

      t.timestamps
    end
  end
end
