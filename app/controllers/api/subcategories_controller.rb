class Api::SubcategoriesController < ApplicationController
  def show
    @category = Category.find(params[:id])
    # goes to subcategories show page with main category object
    render :show
  end
end
