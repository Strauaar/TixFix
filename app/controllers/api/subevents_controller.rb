class Api::SubeventsController < ApplicationController
  def show
    @subevent = Subevent.find(params[:id])
    render :show
  end

  def available_tickets
    event = Subevent.find(params[:id])
    @tickets = event.tickets.where(buyer_id: nil)
    render :available_tickets
  end
end
