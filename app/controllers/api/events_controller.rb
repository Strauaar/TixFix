class Api::EventsController < ApplicationController
  def index
    @events = Event.all
    @count = params[:currentCount]
    render :index
  end
end
