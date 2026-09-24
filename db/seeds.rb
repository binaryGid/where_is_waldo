# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Photo.create(difficulty: 'medium', image: "/images/city_center_chaos.jpg", name: "City center chaos")
# Photo.create(difficulty: 'medium', image: "/images/department_store_rush.jpg", name: "Department store rush")
# Photo.create(difficulty: 'hard', image: "/images/feast_frenzy.jpg", name: "Feast frenzy")
# Photo.create(difficulty: 'medium', image: "/images/fishing_day.jpg", name: "Fishing day")
# Photo.create(difficulty: 'medium', image: "/images/into_the_hole.jpg", name: "Into the hole")
# Photo.create(difficulty: 'medium', image: "/images/maze_madness.jpg", name: "Maze madness")
# Photo.create(difficulty: 'medium', image: "/images/medieval_city.jpg", name: "Medieval city")

chars = {
  23 => {
    names: [ "Waldo", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ]
  },
  24 => {
    names: [ 'Waldo', "Burning pants lady", "Long man long tie", "Attacking glove" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/HeadshotBurningPantsLady.png", "/images/avatars/HeadshotLongManLongTie.png", "/images/avatars/HeadshotAttackingGlove.png" ]
  },
  25 => {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/TailshotWoof.png", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ]
  },
  26 => {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard" ],
    locations: [ "images/avatars/HeadshotWaldo.webp", "images/avatars/TailshotWoof.png", "images/avatars/HeadshotWilma.png", "images/avatars/HeadshotWizard.webp" ]
  },
  27 => {
    names: [ "Waldo", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "images/avatars/HeadshotWaldo.webp", "images/avatars/HeadshotWilma.png", "images/avatars/HeadshotWizard.webp", "images/avatars/HeadshotOdlaw.webp" ]
  },
  28 => {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "images/avatars/HeadshotWaldo.webp", "images/avatars/TailshotWoof.png", "images/avatars/HeadshotWilma.png", "images/avatars/HeadshotWizard.webp", "images/avatars/HeadshotOdlaw.webp" ]
  },
  29 => {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "images/avatars/HeadshotWaldo.webp", "images/avatars/TailshotWoof.png", "images/avatars/HeadshotWilma.png", "images/avatars/HeadshotWizard.webp", "images/avatars/HeadshotOdlaw.webp" ]
  }
}

chars.each_pair do |key, value|
  photo = Photo.find(key)
  numOfCharacters = value[:names].length
  numOfCharacters.times do |i|
    photo.characters.create!(name: value[:names][i], location: value[:locations][i])
  end
end
