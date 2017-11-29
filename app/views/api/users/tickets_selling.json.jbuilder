@tickets.each do |ticket|
  json.set! ticket.id do
    json.extract! ticket, :id, :buyer_id, :seller_id, :event_id
    json.seller do
      json.id ticket.seller.id
      json.first_name ticket.seller.first_name
      json.last_name ticket.seller.last_name
      json.email ticket.seller.email
    end
    if ticket.buyer.class != NilClass
      json.buyer do
        json.id ticket.buyer.id
        json.first_name ticket.buyer.first_name
        json.last_name ticket.buyer.last_name
        json.email ticket.buyer.email
      end
    end
  end
end
