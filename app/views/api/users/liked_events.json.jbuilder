@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :category_id, :name
    if event.image_url
      json.img_url asset_path(has_img[0])
    end
  end
end
