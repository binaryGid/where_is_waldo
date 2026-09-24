class CreateCharacters < ActiveRecord::Migration[8.1]
  def change
    create_table :characters do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.references :photo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
