class Api::TicketsController < ApplicationController
  def create

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
