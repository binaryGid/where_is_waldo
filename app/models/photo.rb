class Photo < ApplicationRecord
  validates :difficulty, presence: true
  validates :image, presence: true
  validates :name, presence: true
end
