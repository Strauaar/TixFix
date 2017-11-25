class Api::CategoriesController < ApplicationController

  def show
    @category = Category.find(params[:id])
    @count = params[:currentCount]
    render :show
  end

end
