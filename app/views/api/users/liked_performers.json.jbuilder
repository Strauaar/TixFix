@performers.each do |performer|
  json.set! performer.id do
    json.extract performer, :id, :category_id, :name
  end
end
