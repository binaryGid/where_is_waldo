class Api::V1::LeaderboardsController < ApplicationController
  before_action :find_record
  def index
  end

  def show
  end

  def patch
    puts "hiiiiiiiiiiiiiiii"
    find_record.update!(finish: Time.now) if params[:complete]
    puts find_record.inspect
    render json: { duration: find_record.duration }
  end

  private

  def find_record
    Leaderboard.find_by!({ photo_id: params[:photo_id], record_id: cookies[:record_id] })
  end
end
