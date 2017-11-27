# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
concerts_cateogry = Category.create(name:"Concerts" )
sports_category = Category.create(name:"Sports")
theater_category = Category.create(name:"Theater and Comedy")

electronic_subcategory = Subcategory.create(name: "Electronic", category_id: concerts_cateogry.id)
rap_subcategory = Subcategory.create(name:"Rap and Hip Hop", category_id: concerts_cateogry.id)

jayz_performer = Performer.create(name: "Jay Z", category_id: concerts_cateogry.id)
kaskade_performer = Performer.create(name:"Kaskade", category_id: concerts_cateogry.id)

billyg_venue = Venue.create(name:"Billy G Pavilly", location:"San Fran", city: "FranPanScisco", state:"GA")

jayz_event = Event.create(
  name: "Jay Z",
  category_id: concerts_cateogry.id,
  subcategory_id: rap_subcategory.id,
  image_url: "jayz.jpg",
  performer_id: jayz_performer.id,
  venue_id: billyg_venue.id
)

kaskade_event = Event.create(
  name: "Kaskade",
  category_id: concerts_cateogry.id,
  subcategory_id: electronic_subcategory.id,
  image_url: "kaskade.jpg",
  performer_id: kaskade_performer.id,
  venue_id: billyg_venue.id
)


for i in 0..2
  Subevent.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: concerts_cateogry.id,
    subcategory_id: rap_subcategory.id,
    image_url: "jayz.jpg",
    date: "Dec 21, 2017",
    event_id: jayz_event.id
  )
end
for i in 0..2
  Subevent.create(
    name: "Kaskade",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: concerts_cateogry.id,
    subcategory_id: electronic_subcategory.id,
    image_url: "kaskade.jpg",
    date: "Dec 20, 2017",
    event_id: kaskade_event.id
  )
end
