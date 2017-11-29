# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171129105044) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "parent_category_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.integer "category_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.integer "performer_id", null: false
    t.integer "venue_id"
    t.index ["category_id"], name: "index_events_on_category_id"
    t.index ["performer_id"], name: "index_events_on_performer_id"
  end

  create_table "performer_likes", force: :cascade do |t|
    t.integer "performer_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["performer_id"], name: "index_performer_likes_on_performer_id"
    t.index ["user_id"], name: "index_performer_likes_on_user_id"
  end

  create_table "performers", force: :cascade do |t|
    t.string "name", null: false
    t.integer "category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_performers_on_category_id"
  end

  create_table "subevents", force: :cascade do |t|
    t.integer "event_id", null: false
    t.string "name"
    t.integer "venue_id"
    t.integer "category_id"
    t.string "image_url"
    t.datetime "date"
    t.integer "performer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_subevents_on_category_id"
    t.index ["event_id"], name: "index_subevents_on_event_id"
    t.index ["performer_id"], name: "index_subevents_on_performer_id"
    t.index ["venue_id"], name: "index_subevents_on_venue_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "seller_id", null: false
    t.integer "buyer_id"
    t.integer "event_id", null: false
    t.integer "price", null: false
    t.string "type_of", null: false
    t.string "row", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id"], name: "index_tickets_on_buyer_id"
    t.index ["event_id"], name: "index_tickets_on_event_id"
    t.index ["seller_id"], name: "index_tickets_on_seller_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "venues", force: :cascade do |t|
    t.string "name", null: false
    t.string "location", null: false
    t.string "city"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
