class Answer < ApplicationRecord
  has_one :character
  has_one :photo, through: :character
end
