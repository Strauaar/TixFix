# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


for i in 0..30
  Event.create(
    name: "Jay Z",
    venue_id: 1,
    performer_id: 1,
    category_id: 2,
    image_url: "jayz.jpg",
    dates: ["Dec 20, 2017"]
  )
end
