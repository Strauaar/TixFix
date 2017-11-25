class Api::CategoriesController < ApplicationController

  def show
    @count = params[:currentCount]
    if @count
      @events = Category.find(params[:id]).events.limit(10).offset(@count.to_i)
    else
      @events = Category.find(params[:id]).events.limit(10)
    end
    render :show
  end


end
