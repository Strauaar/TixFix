class Api::EventsController < ApplicationController
  def index
    @count = params[:currentCount]
    if params[:name]
      query =  "%" + params[:name].downcase.split('').join("%") + "%"
      @subevents = Subevent.where("lower(name) LIKE ?", query)
      render :subevents
    elsif @count
      @events = Event.filter(params[:filter]).limit(10).offset(@count.to_i)
    else
      @events = Event.filter(params[:filter]).limit(10)
    end
    render :index
  end

end
