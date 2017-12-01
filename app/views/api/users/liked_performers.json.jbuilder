@performers.each do |performer|
  json.set! performer.id do
    json.extract! performer, :id, :category_id, :name
    has_img = performer.events.where('image_url IS NOT NULL')
    if has_img.length > 0
      # json.img_url asset_path(has_img[0])
    end
  end
end
