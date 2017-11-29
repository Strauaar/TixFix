class Api::TicketsController < ApplicationController
  def create

  end

  def show
    @ticket = Ticket.find(params[:id])
    render :show
  end
end
