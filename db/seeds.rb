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
  "City center chaos": {
    names: [ "Waldo", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ],
    answers: [
      {
        min_width: 40.86,
        max_width: 44.92,
        min_height: 73.27,
        max_height: 81.11
      },
      {
        min_width: 43.08,
        max_width: 44.25,
        min_height: 58.97,
        max_height: 62.62
      },
      {
        min_width: 65.08,
        max_width: 66.33,
        min_height: 76.65,
        max_height: 79.22
      },
      {
        min_width: 57.66,
        max_width: 59.50,
        min_height: 94.60,
        max_height: 98.25
      }
    ]
  },
  "Department store rush": {
    names: [ 'Waldo', "Burning pants lady", "Long man long tie", "Attacking glove" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/HeadshotBurningPantsLady.png", "/images/avatars/HeadshotLongManLongTie.png", "/images/avatars/HeadshotAttackingGlove.png" ],
    answers: [
      {
        min_width: 41.16,
        max_width: 43.58,
        min_height: 16.70,
        max_height: 21.42
      },
      {
        min_width: 16.50,
        max_width: 19.33,
        min_height: 36.47,
        max_height: 45.28
      },
      {
        min_width: 76.00,
        max_width: 79.16,
        min_height: 76.65,
        max_height: 88.13
      },
      {
        min_width: 19.00,
        max_width: 24.00,
        min_height: 78.25,
        max_height: 84.61
      }
    ]
  },
  "Feast frenzy": {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/TailshotWoof.png", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ],
    answers: [
      {
        min_width: 55.41,
        max_width: 57.67,
        min_height: 33.81,
        max_height: 38.48
      },
      {
        min_width: 67.58,
        max_width: 68.92,
        min_height: 61.27,
        max_height: 61.94
      },
      {
        min_width: 38.58,
        max_width: 39.41,
        min_height: 31.69,
        max_height: 35.41
      },
      {
        min_width: 84.33,
        max_width: 87.50,
        min_height: 83.41,
        max_height: 90.98
      },
      {
        min_width: 39.75,
        max_width: 40.83,
        min_height: 59.02,
        max_height: 62.20
      }
    ]
  },
  "Fishing day": {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/TailshotWoof.png", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp" ],
    answers: [
      {
        min_width: 47.16,
        max_width: 48.33,
        min_height: 20.36,
        max_height: 27.08
      },
      {
        min_width: 96.08,
        max_width: 96.83,
        min_height: 39.44,
        max_height: 41.08
      },
      {
        min_width: 22.17,
        max_width: 23.25,
        min_height: 31.85,
        max_height: 36.51
      },
      {
        min_width: 68.50,
        max_width: 70.83,
        min_height: 15.82,
        max_height: 21.24
      }
    ]
  },
  "Into the hole": {
    names: [ "Waldo", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ],
    answers: [
      {
        min_width: 93.41,
        max_width: 94.58,
        min_height: 4.40,
        max_height: 8.54
      },
      {
        min_width: 27.08,
        max_width: 28.33,
        min_height: 63.34,
        max_height: 66.71
      },
      {
        min_width: 27.83,
        max_width: 31.08,
        min_height: 37.31,
        max_height: 46.24
      },
      {
        min_width: 89.33,
        max_width: 90.67,
        min_height: 54.40,
        max_height: 59.97
      }
    ]
  },
  "Maze madness": {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/TailshotWoof.png", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ],
    answers: [
      {
        min_width: 55.58,
        max_width: 56.25,
        min_height: 43.40,
        max_height: 44.92
      },
      {
        min_width: 60.92,
        max_width: 61.50,
        min_height: 70.10,
        max_height: 70.49
      },
      {
        min_width: 30.75,
        max_width: 31.58,
        min_height: 60.91,
        max_height: 61.93
      },
      {
        min_width: 66.25,
        max_width: 67.00,
        min_height: 30.84,
        max_height: 33.00
      },
      {
        min_width: 43.42,
        max_width: 44.00,
        min_height: 32.23,
        max_height: 33.88
      }
    ]
  },
  "Medieval city": {
    names: [ "Waldo", "Woof the Dog", "Wilma", "Whitebeard the Wizard", "Odlaw" ],
    locations: [ "/images/avatars/HeadshotWaldo.webp", "/images/avatars/TailshotWoof.png", "/images/avatars/HeadshotWilma.png", "/images/avatars/HeadshotWizard.webp", "/images/avatars/HeadshotOdlaw.webp" ],
    answers: [
      {
        min_width: 16.33,
        max_width: 17.00,
        min_height: 83.76,
        max_height: 85.82
      },
      {
        min_width: 11.08,
        max_width: 11.83,
        min_height: 52.28,
        max_height: 52.67
      },
      {
        min_width: 75.42,
        max_width: 76.00,
        min_height: 75.42,
        max_height: 76.93
      },
      {
        min_width: 28.58,
        max_width: 29.08,
        min_height: 12.76,
        max_height: 13.66
      },
      {
        min_width: 86.17,
        max_width: 86.83,
        min_height: 81.44,
        max_height: 33.88
      }
    ]
  }
}

# [ "City center chaos", "Department store rush", "Feast frenzy", "Fishing day", "Into the hole", "Maze madness", "Medieval city" ],


chars.each_pair do |key, value|
  photo = Photo.find_by!(name: key)
  numOfCharacters = value[:names].length
  numOfCharacters.times do |i|
    char = photo.characters.find_or_create_by!(name: value[:names][i], location: value[:locations][i], answer: Answer.find_or_create_by!(value[:answers][i]))
    char
  end
end
