class Api::EventsController < ApplicationController
  def index
    @count = params[:currentCount]
    if @count
      @events = Event.all.limit(10).offset(@count.to_i)
    else
      @events = Event.all.limit(10)
    end
    render :index
  end
end
