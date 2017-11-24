@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :name, :date, :details
    json.venue event.venue
    json.category event.category
  end
end
