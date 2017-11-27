@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :dates, :details
    json.venue event.venue
    json.category event.category
    json.performer event.performer
    if event.image_url
      json.image_url asset_path(event.image_url)
    end
  end
end
