@performers.each do |performer|
  json.set! performer.id do
    json.extract! performer, :id, :category_id, :name
    json.img_url asset_path(performer.events[0].image_url)
  end
end
