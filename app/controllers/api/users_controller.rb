class Api::UsersController < ApplicationController

  def new

  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :new
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def tickets_selling
    @tickets = User.find(params[:id]).selling_tickets
    render :tickets_selling
  end

  def tickets_buying
    @tickets = User.find(params[:id]).bought_tickets
    render :tickets_buying
  end

  def tickets_sold_price

  end

  def tickets_bought_price

  end

  def upcoming_events

  end

  def sold_tickets

  end

  def tickets_selling

  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end

end
