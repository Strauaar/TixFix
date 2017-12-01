class Api::TicketsController < ApplicationController
  def create
    params[:num_tickets].to_i.times do
      @ticket = Ticket.create(seller_id: params[:seller_id], event_id: params[:event_id], price: params[:price].to_i, type_of: params[:type_of], row: params[:row])
    end
    render :create
  end

  def show
    @ticket = Ticket.find(params[:id])
    render :show
  end

  def update
    @ticket = Ticket.find(params[:id])
    @ticket.update(buyer_id: params[:user_id])
  end
end
