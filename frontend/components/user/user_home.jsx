


import React from 'react';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.ticketsSoldPrice = this.ticketsSoldPrice.bind(this);
    this.ticketsBoughtPrice = this.ticketsBoughtPrice.bind(this);
    this.soldTickets = this.soldTickets.bind(this);
    this.ticketsSelling = this.ticketsSelling.bind(this);
    this.renderUpcomingEvents = this.renderUpcomingEvents.bind(this);
  }


  ticketsSoldPrice() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/sold/price'
    }).then(res => this.cumulative_sold_price = res.price)
  }

  ticketsBoughtPrice() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/bought/price'
    }).then(res => this.cumulative_bought_price = res.price)
  }


  soldTickets() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/sold'
    }).then(tickets => this.sold_tickets = Object.values(tickets))

  }

  ticketsSelling() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/selling'
    }).then(tickets => this.selling_tickets = Object.values(tickets))
  }

  componentDidMount() {
    this.props.upcomingEvents();
    this.ticketsSoldPrice();
    this.soldTickets();
    this.ticketsSelling();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.events.length !== newProps.events.length) {
      console.log(newProps.events);
    }
  }

  renderUpcomingEvents() {
    if(this.props.events.length === 0){
      return <span>"You dont have any upcoming events"</span>
    } else {
      return this.props.events.map(eventQ =>
        <span>
          {eventQ.name}
        </span>
      )
    }
  }

  renderList(type) {
    switch(type) {
      case 'upcoming_events':
        return this.renderUpcomingEvents();
      case 'listings':
        return 'liasdasdsts';
      case 'sales':
        return 'saled';
      default:
        return 'defuadaslat';
    }
  }

  render() {
    if(this.props.events === undefined) {
      return null
    }
    return (
      <div className="myhub-home-container">
        <div className="myhub-home-block">
          <div className="myhub-whats-next home-block">
            <div className="header-block">
              <span>WHAT'S NEXT</span>
            </div>
            <div className="list-container">
              {
                this.renderList('upcoming_events')
              }
            </div>
          </div>
          <div className="myhub-listings home-block">
            <div className="header-block">
              <span>LISTINGS</span>
            </div>
            <div className="list-container">
              {
                this.renderList('listings')
              }
            </div>
          </div>
          <div className="myhub-sales-payments-container">
            <div className="myhub-sales-block home-block sale-block">
              <div className="header-block">
                <span>SALES</span>
              </div>
              <div className="list-container">
                {
                  this.renderList('sales')
                }
              </div>
            </div>
            <div className="myhub-payments-block home-block sale-block">
              <div className="header-block">
                <span>PAYMENTS</span>
              </div>
              <div className="list-container">
                <span>
                  You've paid $100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserHome;
