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
    @price = current_user.tickets_sold_price
    render :price
  end

  def tickets_bought
    @tickets = current_user.bought_tickets
    render :tickets
  end

  def upcoming_events
    @subevents = current_user.upcoming_events
    render 'api/events/subevents'
  end

  def sold_tickets
    @tickets = current_user.sold_tickets
    render :tickets
  end

  def tickets_selling
    @tickets = current_user.tickets_selling
    render :tickets
  end

  def liked_performers
    @performers = current_user.performers_liked
    render :liked_performers
  end

  def liked_events
    @events = current_user.events_liked
    render :liked_events
  end

  def user_params
    params.permit(:first_name, :last_name, :email, :password)
  end


end
