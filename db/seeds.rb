# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#USERS
demo_user1 = User.create(first_name: "demo_user", last_name: "1", email: "demoemail@email.com", password: "password")
demo_user2 = User.create(first_name: "demo_user", last_name: "2", email: "email@email.com", password: "password")

#MAIN CATEGORIES
concerts_cateogry = Category.create(name:"Concerts")
sports_category = Category.create(name:"Sports")
theater_category = Category.create(name:"Theater and Comedy")

#SUBCATEGORIES

#CONCERTS SUBCATEGORIES
electronic_subcategory = Category.create(name: "Electronic", parent_category_id: concerts_cateogry.id)
rap_subcategory = Category.create(name:"Rap and Hip Hop", parent_category_id: concerts_cateogry.id)
acoustic_subcategory = Category.create(name:"Acoustic", parent_category_id: concerts_cateogry.id)
house_subcategory = Category.create(name:"House", parent_category_id: concerts_cateogry.id)
rb_subcategory = Category.create(name:"R&B and Soul" parent_category_id: concerts_cateogry.id)


#SPORTS SUBCATEGORIES
football_subcategory = Category.create(name:"Football", parent_category_id: sports_category.id)
baseball_subcategory = Category.create(name:"Baseball", parent_category_id: sports_category.id)
basketball_subcategory = Category.create(name:"Basketball", parent_category_id: sports_category.id)
hockey_subcategory = Category.create(name:"Hockey", parent_category_id:sports_category.id)
soccer_subcategory = Category.create(name:"Soccer", parent_category_id: sports_category.id)

#THEATER SUBCATEGORIES
classical_subcategory = Category.create(name:"Classical Music and Opera", parent_category_id:theater_category.id)
festivals_subcategory = Category.create(name:"Festivals and Fairs", parent_category_id: theater_category.id)
musical_subcategory = Category.create(name:"Musicals", parent_category_id: theater_category.id)
plays_subcategory = Category.create(name:"Plays", parent_category_id:theater_category.id)
dance_subcategory = Category.create(name: "Dance/Ballet", parent_category_id: theater_category.id)


#PERFORMERS

#CONCERT PERFORMERS
jayz_performer = Performer.create(name: "Jay Z", category_id: rap_subcategory.id)
kaskade_performer = Performer.create(name:"Kaskade", category_id: electronic_subcategory.id)
khalid_performer = Performer.create(name:"Khalid", category_id: rb_subcategory.id)
san_holo_performer = Performer.creaet(name:"San Holo", category_id: electronic_subcategory.id)


#SPORTS PERFORMERS
niners_performer = Performer.create(name:"San Francisco 49ers", category_id: football_subcategory.id)
raiders_performer = Performer.create(name:"Oakland Raiders", category_id: football_subcategory.id)
giants_performer = Performer.create(name:"San Francisco Giants", category_id: baseball_subcategory.id)

#THEATER PERFORMERS
nutcracker_performer = Performer.create(name:"The Nutcracker San Francisco", category_id: dance_subcategory.id)
county_fair_performer = Performer.create(name:"County Fair", category_id:festivals_subcategory.id)

#VENUE
billyg_venue = Venue.create(name:"Bill Graham Civic Auditorium", location:"99 Grove St.", city: "San Franacisco", state:"CA")
warfield_venue = Venue.create(name:"The Warfield", location:"982 Market St." city:"San Francisco", state:"CA")
fox_theater_venue = Venue.create(name:"Fox Theater", location:"1807 Telegraph Ave.", city:"Oakland", state:"CA")
att_park_venue = Venue.create(name:"AT&T Park", location: "24 Willie Mays Plaza", city:"San Francisco", state:"CA")
levis_stadium = Venue.create(name:"Levi's Stadium", location:"4900 Marie P DeBartolo Way", city:"Santa Clara", state:"CA")

kaskade_event = Event.create(
name: "Kaskade",
category_id: electronic_subcategory.id,
image_url: "kaskade.jpg",
performer_id: kaskade_performer.id,
venue_id: billyg_venue.id
)
jayz_event = Event.create(
  name: "Jay Z",
  category_id: rap_subcategory.id,
  image_url: "jayz.jpg",
  performer_id: jayz_performer.id,
  venue_id: billyg_venue.id
)
khalid_event = Event.create(
  name:"Khalid",
  category_id: rb_subcategory.id,
  performer_id:khalid_performer.id,
  venue_id: warfield_venue.id
)

san_holo_event = Event.create(
  name:"San Holo",
  category_id: electronic_subcategory.id,
  performer_id: san_holo_performer.id,
  venue_id: fox_theater_venue.id
)

niners_event = Event.create(
  name:"San Francisco 49ers",
  category_id: football_subcategory.id,
  performer_id: niners_performer.id,
  venue_id: levis_stadium.id
)

giants_event = Event.create(
  name:"San Francisco Giants",
  category_id: baseball_subcategory.id,
  performer_id: giants_performer.id,
  venue_id: att_park_venue.id
)

2.times do |i|
  Subevent.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: rap_subcategory.id,
    image_url: "jayz.jpg",
    date: (DateTime.now + i).beginning_of_hour,
    event_id: jayz_event.id
  )
end

3.times do |i|
  Subevent.create(
    name: "Kaskade",
    venue_id: billyg_venue.id,
    performer_id: kaskade_performer.id,
    category_id: rap_subcategory.id,
    image_url: "kaskade.jpg",
    date: (DateTime.now + i).beginning_of_hour,
    event_id: kaskade_event.id
  )
end

2.times do |i|
  Subevent.create(
    name: "Khalid",
    venue_id: warfield_venue.id,
    performer_id: khalid_performer.id,
    category_id: rb_subcategory.id,
    image_url: "khalid.jpg",
    date: (DateTime.now + i + 10).beginning_of_hour,
    event_id: khalid_event.id
  )
end

Subevent.create(
  name:"San Holo",
  venue_id: fox_theater_venue.id,
  performer_id: san_holo_performer.id,
  category_id: electronic_subcategory.id,
  image_url:"san_holo.jpg",
  date:(DateTime.now + 13).beginning_of_hour,
  event_id: san_holo_event.id
)

Subevent.create(
  name:"Oakland Raiders at San Francisco 49ers",
  venue_id: levis_stadium.id,
  performer_id: niners_performer.id,
  category_id: football_subcategory.id,
  date: (DateTime.now.end_of_week.beginning_of_hour),
  event_id: niners_event.id
)

Subevent.create(
  name:"Oakland Athletics at San Francisco Giants",
  venue_id: att_park_venue.id,
  performer_id: giants_performer.id,
  category_id: baseball_subcategory.id,
  date: ((DateTime.now + 15).end_of_week.beginning_of_day,
  event_id: giants_event.id
)











Ticket.create(seller_id: demo_user1.id, buyer_id: demo_user2.id, event_id: subevent.id, price: 100, type_of: "General Admission", row: "B")
Ticket.create(seller_id: demo_user1.id, event_id: subevent.id, price: 120, type_of: "General Admission", row: "A")
