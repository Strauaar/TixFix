class Api::CategoriesController < ApplicationController

  def show
    if params[:type] == 'list'
      @category = Category.find(params[:id])
      render :subcategory_list
    elsif params[:type] == 'events'
      @events = Category.find(params[:id]).events
      render :show
    end
    # elsif params[:currentCount]
    #   @count = params[:currentCount]
    #   @events = Category.find(params[:id]).events.limit(10).offset(@count.to_i)
    #   render :show
    # elsif params[:filter_type] && params[:id] != 'undefined'
    #   id = Category.find(params[:id]).subcategories.pluck(:id);
    #   @subevents = Subevent.filter_date(id, params[:filter_type])
    #   render :filtered
    # elsif params[:filter_type]
    #   @subevents = Subevent.filter_date(-1, params[:filter_type])
    #   render :filtered
    # else
    #   @events = Category.find(params[:id]).child_events.limit(10)
    #   render :show
    # end
  end


end
