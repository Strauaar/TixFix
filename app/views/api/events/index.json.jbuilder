@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name
    json.category event.category
    json.subevent event.subevents
    json.performer event.performer
    if event.image_url
      json.image_url asset_path(event.image_url)
    end
  end
end
