


import React from 'react';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.ticketsSoldPrice = this.ticketsSoldPrice.bind(this);
    this.ticketsBoughtPrice = this.ticketsBoughtPrice.bind(this);
    this.upcomingEvents = this.upcomingEvents.bind(this);
    this.soldTickets = this.soldTickets.bind(this);
    this.ticketsSelling = this.ticketsSelling.bind(this);
  }

  ticketsSoldPrice() {

  }

  ticketsBoughtPrice() {

  }

  upcomingEvents() {

  }

  soldTickets() {

  }

  ticketsSelling() {

  }



  renderList(type) {
    switch(type) {
      case 'upcoming_events':
        return 'eveasdnts';
      case 'listings':
        return 'liasdasdsts';
      case 'sales':
        return 'saled';
      default:
        return 'defuadaslat';
    }
  }

  render() {
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
