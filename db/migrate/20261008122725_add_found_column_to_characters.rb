class AddFoundColumnToCharacters < ActiveRecord::Migration[8.1]
  def change
    add_column :characters, :found, :boolean, default: false
  end
end
