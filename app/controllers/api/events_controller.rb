class Api::EventsController < ApplicationController
  def index

    @count = params[:currentCount]

    if @count
      @events = Event.filter(params[:filter]).limit(10).offset(@count.to_i)
    else
      @events = Event.filter(params[:filter]).limit(10)
    end
    render :index
  end

end
