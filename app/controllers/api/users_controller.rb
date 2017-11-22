class Api::UsersController < ApplicationController

  def new

  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :new
    else
      render json: @user.errors.full_messages
    end
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end

end
