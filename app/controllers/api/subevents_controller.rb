class Api::SubeventsController < ApplicationController
  def show
    @subevent = Subevent.find(params[:id])
    render :show
  end
end
