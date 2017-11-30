@tickets.each do |ticket|
  json.set! ticket.id do
    json.extract! ticket, :price, :type_of, :row
    json.event ticket.event
  end
end
