class Photo < ApplicationRecord
  validates :difficulty, presence: true
  validates :image, presence: true
  validates :name, presence: true

  has_many :characters
  has_many :answers, through: :characters
  has_many :leaderboards
end
