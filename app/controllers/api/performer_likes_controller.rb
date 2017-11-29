class Api::PerformerLikesController < ApplicationController

  def create
    @like = PerformerLike.create(user_id: params[:user_id], performer_id: params[:performer_id])
    render :show
  end

  def destroy
    @like = PerformerLike.create(user_id: params[:user_id], performer_id: params[:performer_id])
    render :show
  end

  def index
    user = User.find(params[:user_id])
    @liked_performers = user.performers_liked
    render :index
  end
end
