class Api::EventLikesController < ApplicationController

  def create
    @like = EventLike.create(user_id: params[:user_id], event_id: params[:event_id])
    render :show
  end

  def destroy
    @like = EventLike.find_by(user_id: params[:user_id], event_id: params[:event_id])
    @like.delete
    render :show
  end

  def index

  end
end
