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
rb_subcategory = Category.create(name:"R&B and Soul", parent_category_id: concerts_cateogry.id)


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
san_holo_performer = Performer.create(name:"San Holo", category_id: electronic_subcategory.id)


#SPORTS PERFORMERS
niners_performer = Performer.create(name:"SF 49ers", category_id: football_subcategory.id)
raiders_performer = Performer.create(name:"Oakland Raiders", category_id: football_subcategory.id)
giants_performer = Performer.create(name:"SF Giants", category_id: baseball_subcategory.id)

#THEATER PERFORMERS
nutcracker_performer = Performer.create(name:"The Nutcracker SF", category_id: dance_subcategory.id)
county_fair_performer = Performer.create(name:"County Fair", category_id:festivals_subcategory.id)
sf_symphony_performer = Performer.create(name:"SF Symphony", category_id: classical_subcategory.id)

#VENUE
billyg_venue = Venue.create(name:"Bill Graham Civic Auditorium", location:"99 Grove St.", city: "San Franacisco", state:"CA")
warfield_venue = Venue.create(name:"The Warfield", location:"982 Market St.", city:"SF", state:"CA")
fox_theater_venue = Venue.create(name:"Fox Theater", location:"1807 Telegraph Ave.", city:"Oakland", state:"CA")
att_park_venue = Venue.create(name:"AT&T Park", location: "24 Willie Mays Plaza", city:"SF", state:"CA")
levis_stadium = Venue.create(name:"Levi's Stadium", location:"4900 Marie P DeBartolo Way", city:"Santa Clara", state:"CA")
oakland_stadium = Venue.create(name:"Oakland Coliseum", location:"7000 Coliseum Way,", city:"Oakland", state:"CA")
warner_theater = Venue.create(name:"Warner Theatre", location:"513 13th Street", city:"San Franacisco", state:"CA")
davies_venue = Venue.create(name:"Davies Symphony Hall", location:"201 Van Ness Ave.", city: "San Franacisco", state: "CA")

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
  name:"SF 49ers",
  category_id: football_subcategory.id,
  performer_id: niners_performer.id,
  venue_id: levis_stadium.id
)

giants_event = Event.create(
  name:"SF Giants",
  category_id: baseball_subcategory.id,
  performer_id: giants_performer.id,
  venue_id: att_park_venue.id
)
jayz_event2 = Event.create(
  name: "Jay Z",
  category_id: rap_subcategory.id,
  image_url: "jayz.jpg",
  performer_id: jayz_performer.id,
  venue_id: billyg_venue.id
)

raiders_event = Event.create(
  name: "Oakland Raiders",
  category_id: football_subcategory.id,
  performer_id: raiders_performer.id,
  venue_id: oakland_stadium.id
)

nutcracker_event = Event.create(
  name:"The Nutcracker",
  category_id: dance_subcategory.id,
  performer_id: nutcracker_performer.id,
  venue_id: warner_theater.id
)

symphony_event = Event.create(
  name:"SF Symphony",
  category_id: classical_subcategory.id,
  performer_id: sf_symphony_performer.id,
  venue_id: davies_venue.id
)

symphony_event2 = Event.create(
  name:"SF Symphony",
  category_id: classical_subcategory.id,
  performer_id: sf_symphony_performer.id,
  venue_id: davies_venue.id
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
    Ticket.create(seller_id:demo_user1, event_id: event.id, price: 140, type_of:VIP, row: A)
end

3.times do |i|
  event = Subevent.create(
    name: "Kaskade",
    venue_id: billyg_venue.id,
    performer_id: kaskade_performer.id,
    category_id: rap_subcategory.id,
    image_url: "kaskade.jpg",
    date: (DateTime.now + i).beginning_of_hour,
    event_id: kaskade_event.id
  )
    Ticket.create(seller_id:demo_user1, event_id: event.id, price: 80, type_of:GA, row: A)
end

2.times do |i|
  event = Subevent.create(
    name: "Khalid",
    venue_id: warfield_venue.id,
    performer_id: khalid_performer.id,
    category_id: rb_subcategory.id,
    image_url: "khalid.jpg",
    date: (DateTime.now + i + 10).beginning_of_hour,
    event_id: khalid_event.id
  )
  Ticket.create(seller_id:demo_user1, event_id: event.id, price: 190, type_of:VIP, row: A)
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
  name:"Oakland Raiders at SF 49ers",
  venue_id: levis_stadium.id,
  performer_id: niners_performer.id,
  category_id: football_subcategory.id,
  date: (DateTime.now.end_of_week.beginning_of_hour),
  event_id: niners_event.id
)

Subevent.create(
  name:"Oakland Athletics at SF Giants",
  venue_id: att_park_venue.id,
  performer_id: giants_performer.id,
  category_id: baseball_subcategory.id,
  date: (DateTime.now + 15).end_of_week.beginning_of_day,
  event_id: giants_event.id
)

1.times do |i|
  event = Subevent.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: rap_subcategory.id,
    image_url: "jayz.jpg",
    date: (DateTime.now + i + 18).end_of_week.beginning_of_hour,
    event_id: jayz_event2.id
  )
    Ticket.create(seller_id:demo_user2, buyer_id: demo_user1, event_id: event.id, price: 70, type_of:VIP, row: A)
end

Subevent.create(
  name:"SF 49ers at Oakland Raiders",
  venue_id: oakland_stadium.id,
  performer_id: raiders_performer.id,
  category_id: football_subcategory.id,
  date: (DateTime.now + 20).end_of_week.beginning_of_day,
  event_id: raiders_event.id
)

2.times do |i|
  event = Subevent.create(
    name:"The Nutcracker",
    venue_id: warner_theater.id,
    performer_id: nutcracker_performer.id,
    category_id: dance_subcategory.id,
    date: (DateTime.now + 22 + i).end_of_week.beginning_of_day,
    event_id: nutcracker_event.id
  )
  Ticket.create(seller_id:demo_user2, buyer_id: demo_user1, event_id: event.id, price: 90, type_of:GA, row: C)
end

3.times do |i|
  event = Subevent.create(
    name:"SF Symphony",
    venue_id: davies_venue.id,
    performer_id: sf_symphony_performer.id,
    category_id: classical_subcategory.id,
    date: (DateTime.now + 30 + i).end_of_week.beginning_of_day,
    event_id: symphony_event.id
    )
    Ticket.create(seller_id:demo_user1, buyer_id: demo_user2, event_id: event.id, price: 120, type_of:GA, row: C)
end

2.times do |i|
  event = Subevent.create(
    name:"SF Symphony",
    venue_id: davies_venue.id,
    performer_id: sf_symphony_performer.id,
    category_id: classical_subcategory.id,
    date: (DateTime.now + 40 + i).end_of_week.beginning_of_day,
    event_id: symphony_event2.id
  )
  Ticket.create(seller_id:demo_user1, event_id: event.id, price: 100, type_of:GA, row: A)
end
