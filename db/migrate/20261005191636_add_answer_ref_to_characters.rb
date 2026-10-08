class AddAnswerRefToCharacters < ActiveRecord::Migration[8.1]
  def change
    add_reference :characters, :answer, null: false, foreign_key: true
  end
end
