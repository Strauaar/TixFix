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
    else
      @events = Category.find(params[:id]).events.limit(10)
      render :show
    end
  end


end
