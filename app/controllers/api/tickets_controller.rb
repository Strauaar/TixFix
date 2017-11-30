class Api::TicketsController < ApplicationController
  def create
    @ticket = Ticket.create(seller_id: params[:seller_id], event_id: params[:event_id], price: params[:price], type_of: params[:type_of], row: params[:row])
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
