@subevents.each do |subevent|
  json.set! subevent.id do
    json.extract! subevent, :id, :name, :venue_id, :category_id, :date, :performer_id
    json.venue subevent.venue
    json.performer subevent.performer
  end
end
