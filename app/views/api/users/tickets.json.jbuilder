@tickets.each do |ticket|
  json.extract! :price, :type_of, :row
  json.event ticket.event
end
