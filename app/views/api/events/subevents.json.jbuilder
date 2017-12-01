@subevents.each do |subevent|
  json.set! subevent.id do
    json.extract! subevent, :id, :name, :venue_id, :category_id, :date, :performer_id
    if subevent.image_url
      json.img_url asset_path(subevent.image_url)
    end
    json.venue subevent.venue
    json.performer subevent.performer
  end
end
