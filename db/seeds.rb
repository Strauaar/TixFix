# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
concerts_cateogry = Category.create(name:"Concerts" )
jayz_performer = Performer.create(name: "Jay Z", category_id: concerts_cateogry.id)
billyg_venue = Venue.create(name:"Billy G Pavilly", location:"San Fran", city: "FranPanScisco", state:"GA")

for i in 0..30
  Event.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: concerts_cateogry.id,
    image_url: "jayz.jpg",
    dates: ["Dec 20, 2017"]
  )
end
