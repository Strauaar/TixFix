class Api::EventsController < ApplicationController
  def index
    @count = params[:currentCount]
    if params[:filter][:name]
      query =  '%' + params[:filter][:name].downcase.split('').join("%") + '%'
      @subevents = Subevent.where("lower(name) LIKE ?", query).limit(10)
      render :subevents
    else
      if  @count
        @events = Event.filter(params[:filter]).limit(10).offset(@count.to_i)
      else
        @events = Event.filter(params[:filter]).limit(10)
      end
      render :index
    end
  end

end
