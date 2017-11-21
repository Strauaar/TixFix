class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to links_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end

end
