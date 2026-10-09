class Leaderboard < ApplicationRecord
  validates :record_id, uniqueness: true

  before_update :calculate_duration

  belongs_to :photo

  private
  def calculate_duration
    if self.finish && !self.duration
      self.duration = self.finish - self.start
    end
  end
end
