class Character < ApplicationRecord
  validates :name, presence: true
  validates :location, presence: true

  belongs_to :photo
  belongs_to :answer
end
