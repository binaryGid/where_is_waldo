class Api::V1::AnswersController < ApplicationController
  before_action :within_range?
  def create
    character_id = params[:character_id]
    if within_range?
      render json: { found: true, character_id: character_id }
    else
      render json: { found: false, character_id: character_id }
    end
  end


  private

  def within_range?
    character = Character.find_by(photo_id: params[:photo_id], id: params[:character_id])
    answer = character.answer
    params[:width].to_f.between?(answer.min_width, answer.max_width) && params[:height].to_f.between?(answer.min_height, answer.max_height)
  end
end
