class CreatePhotos < ActiveRecord::Migration[8.1]
  def change
    create_table :photos do |t|
      t.string :difficulty, null: false
      t.string :image, null: false

      t.timestamps
    end
  end
end
