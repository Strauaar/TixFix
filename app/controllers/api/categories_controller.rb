class Api::CategoriesController < ApplicationController

  def show
    if params[:type] == 'list'
      @category = Category.find(params[:id])
      render :subcategory_list
    elsif params[:type] == 'events'
      @events = Category.find(params[:id]).events
      render :show
    end

  end


end
