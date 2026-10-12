class Api::V1::LeaderboardsController < ApplicationController
  before_action :find_record, only: [ :patch ]
  def index
    leaderboard = Leaderboard.all.where.not(duration: nil).order(duration: :desc).limit(20)
    render json: leaderboard
  end

  def show
  end

  def patch
    find_record.update!(finish: Time.now) if params[:complete]
    find_record.update!(name: params[:name]) if params[:name]
    render json: { duration: find_record.duration }
  end

  private

  def find_record
    Leaderboard.find_by!({ photo_id: params[:photo_id], record_id: cookies[:record_id] })
  end
end
