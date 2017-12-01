class Api::PerformerLikesController < ApplicationController

  def create
    @like = PerformerLike.create(user_id: params[:user_id], performer_id: params[:performer_id])
    render :show
  end

  def destroy
    @like = PerformerLike.find_by(user_id: params[:user_id], performer_id: params[:performer_id])
    @like.delete
    render :show
  end

  def index
    @liked_performers = current_user.performers_liked
    render :index
  end
end
