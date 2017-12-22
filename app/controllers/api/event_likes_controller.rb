class Api::EventLikesController < ApplicationController

  def create
    @like = EventLike.create(user_id: params[:user_id], event_id: params[:event_id])
    render :show
  end

  def destroy
    @like = EventLike.find_by(user_id: params[:user_id].to_i, event_id: params[:event_id].to_i)
    if @like
    render :show
  else
    render json: @like.errors.full_messages
  end
  end

  def index
    if current_user
      @liked_events = current_user.events_liked
      render :index
    else
      render json: []
    end
  end
end
