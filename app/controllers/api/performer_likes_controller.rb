class Api::PerformerLikesController < ApplicationController

  def create

  end

  def destroy

  end

  def index
    user = User.find(params[:user_id])
    @liked_performers = user.performers_liked
    render :index
  end
end
