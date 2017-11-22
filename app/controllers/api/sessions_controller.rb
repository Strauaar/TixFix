class Api::SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login(@user)
      render :new
    else
      render json: ['Invalid email or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    logout(@user)
    render :new
  end

  def session_params
    params.permit(:email, :password)
  end

end
