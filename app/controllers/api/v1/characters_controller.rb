class Api::V1::CharactersController < ApplicationController
  def index
    puts "+++++++++++++++++++++++++++++++++++++++++++++++"
    puts params
    puts "+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
    photo = Photo.find(params[:id])
    characters = photo.characters

    render json: characters
  end

  def show
    character
  end
end
