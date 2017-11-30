@tickets.each do |ticket|
  json.set! ticket.id do
    json.extract! ticket, :price, :type_of, :row
    json.event ticket.event
    json.venue do
      json.extract! ticket.event.venue, :name, :city, :state
    end
  end
end
