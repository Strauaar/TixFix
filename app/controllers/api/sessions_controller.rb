class Api::SessionsController < ApplicationController

  def new

  end

  def create
    user = User.find_by_credentials(params[:email], params[:password])
    if user
      login(user)
    else
      render :new
    end
  end

  def destroy
    logout(user)
  end

  def session_params
    params.permit(:email, :password)
  end

end
