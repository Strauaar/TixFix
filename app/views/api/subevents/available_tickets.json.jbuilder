@tickets.each do |ticket|
  json.set! ticket.id do
    json.extract! ticket, :id, :buyer_id, :seller_id, :event_id, :type_of, :row, :price
    json.seller do
      json.id ticket.seller.id
      json.first_name ticket.seller.first_name
      json.last_name ticket.seller.last_name
      json.email ticket.seller.email
    end
  end
end
