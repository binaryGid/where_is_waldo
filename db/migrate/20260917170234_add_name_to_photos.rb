class AddNameToPhotos < ActiveRecord::Migration[8.1]
  def change
    add_column :photos, :name, :string
  end
end
