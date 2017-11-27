class Api::SubcategoriesController < ApplicationController
  def show
    if params[:type] == 'list'
      @category = Category.find(params[:id])
      # goes to subcategories show page with main category object
      render :show
    elsif params[:type] == 'events'
      @subcategory = Subcategory.find(params[:id])
      render :events
    end
  end
end
