class Api::V1::PhotosController < ApplicationController
  before_action :record_exist?, only: [ :show ]
  def index
    photos = Photo.all
    render json: photos
  end

  def show
    photo = Photo.find(params[:id])
    record_id = SecureRandom.uuid()
    start_time = Time.now()
    unless record_exist?
      photo.leaderboards.create!({ record_id: record_id, start: start_time })
      cookies[:record_id] = { value: record_id, expires: 3.month }
      cookies[:photo_id] = { value: params[:id], expires: 3.month }
    end
    render json: photo
  end

  private

  def record_exist?
    unless cookies[:record_id]
      false
    else
      true
    end
  end
end
