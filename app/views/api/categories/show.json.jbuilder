@category.events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :date, :details
    json.venue event.venue
    json.category event.category
    if event.image_url
      json.image_url asset_path(event.image_url)
    end
  end
end
