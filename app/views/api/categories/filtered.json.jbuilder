@subevents.each do |subevent|
  json.set! subevent.event.id do
    json.extract! subevent.event, :id, :name
    json.category subevent.event.category
    json.subevents subevent.event.subevents
    json.venue subevent.event.venue
    json.performer subevent.event.performer
    if subevent.event.image_url
      json.image_url asset_path(subevent.event.image_url)
    end
  end
end
