

if @count
  eventsToAdd = @category.events[@count.to_i, @count.to_i + 1]
  eventsToAdd.each do |event|
    json.set! event.id do
      json.extract! event, :id, :name, :dates, :details
      json.venue event.venue
      json.category event.category
      if event.image_url
        json.image_url asset_path(event.image_url)
      end
    end
  end

else

  @category.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :name, :dates, :details
      json.venue event.venue
      json.category event.category
      if event.image_url
        json.image_url asset_path(event.image_url)
      end
    end
  end

end
