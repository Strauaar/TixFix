# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user1 = User.create(first_name: "demo_user", last_name: "1", email: "demoemail@email.com", password: "password")
demo_user2 = User.create(first_name: "demo_user", last_name: "2", email: "email@email.com", password: "password")

concerts_cateogry = Category.create(name:"Concerts")
sports_category = Category.create(name:"Sports")
theater_category = Category.create(name:"Theater and Comedy")

electronic_subcategory = Category.create(name: "Electronic", parent_category_id: concerts_cateogry.id)
rap_subcategory = Category.create(name:"Rap and Hip Hop", parent_category_id: concerts_cateogry.id)
football_subcategory = Category.create(name:"Football", parent_category_id: sports_category.id)

jayz_performer = Performer.create(name: "Jay Z", category_id: rap_subcategory.id)
kaskade_performer = Performer.create(name:"Kaskade", category_id: electronic_subcategory.id)
niners_performer = Performer.create(name:"49ers", category_id: football_subcategory.id)

billyg_venue = Venue.create(name:"Bill Graham", location:"123 Location", city: "San Franacisco", state:"CA")

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

kaskade_event1 = Event.create(
  name: "Kaskade",
  category_id: electronic_subcategory.id,
  image_url: "kaskade.jpg",
  performer_id: kaskade_performer.id,
  venue_id: billyg_venue.id
)

jayz_event1 = Event.create(
  name: "Jay Z",
  category_id: rap_subcategory.id,
  image_url: "jayz.jpg",
  performer_id: jayz_performer.id,
  venue_id: billyg_venue.id
)

subevent = Subevent.create(
  name: "Jay Z",
  venue_id: billyg_venue.id,
  performer_id: jayz_performer.id,
  category_id: rap_subcategory.id,
      image_url: "jayz.jpg",
  date: "Dec 24, 2017",
  event_id: jayz_event.id
)


#JAYZ
  Subevent.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: rap_subcategory.id,
        image_url: "jayz.jpg",
    date: "Dec 15, 2017",
    event_id: jayz_event.id
  )

  Subevent.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: rap_subcategory.id,
        image_url: "jayz.jpg",
    date: "Dec 16, 2017",
    event_id: jayz_event.id
  )

  Subevent.create(
    name: "Jay Z",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: rap_subcategory.id,
        image_url: "jayz.jpg",
    date: "Dec 17, 2017",
    event_id: jayz_event.id
  )

#KASKADE
  Subevent.create(
    name: "Kaskade",
    venue_id: billyg_venue.id,
    performer_id: jayz_performer.id,
    category_id: electronic_subcategory.id,
    image_url: "kaskade.jpg",
    date: "Dec 30, 2017",
    event_id: kaskade_event.id
  )

  Subevent.create(
    name: "Kaskade",
    venue_id: billyg_venue.id,
    performer_id: kaskade_performer.id,
    category_id: electronic_subcategory.id,
    image_url: "kaskade.jpg",
    date: "Dec 31, 2017",
    event_id: kaskade_event.id
  )



Ticket.create(seller_id: demo_user1.id, buyer_id: demo_user2.id, event_id: subevent.id, price: 100, type_of: "General Admission", row: "B")
Ticket.create(seller_id: demo_user1.id, event_id: subevent.id, price: 120, type_of: "General Admission", row: "A")
