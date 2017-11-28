class Api::CategoriesController < ApplicationController

  def show
    if params[:type] == 'list'
      @category = Category.find(params[:id])
      render :subcategory_list
    elsif params[:type] == 'events'
      @events = Category.find(params[:id]).events
      render :show
    elsif params[:currentCount]
      @count = params[:currentCount]
      @events = Category.find(params[:id]).events.limit(10).offset(@count.to_i)
      render :show
    elsif params[:filter_type]
      @subevents = Subevent.filter_date(params[:id], params[:filter_type])
      render :filtered
    else
      @events = Category.find(params[:id]).events.limit(10)
      render :show
    end
  end


end
