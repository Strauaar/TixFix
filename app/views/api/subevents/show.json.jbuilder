json.extract! @subevent, :id, :name, :date
json.category @subevent.category
json.venue @subevent.venue.name
json.location @subevent.venue.location
json.city @subevent.venue.city
json.state @subevent.venue.state
json.performer @subevent.performer
if @subevent.image_url
  json.image_url asset_path(@subevent.image_url)
end
