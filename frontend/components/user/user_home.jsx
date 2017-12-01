import React from 'react';
import moment from 'moment';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.ticketsSoldPrice = this.ticketsSoldPrice.bind(this);
    this.ticketsBought = this.ticketsBought.bind(this);
    this.soldTickets = this.soldTickets.bind(this);
    this.ticketsSelling = this.ticketsSelling.bind(this);
    this.renderUpcomingEvents = this.renderUpcomingEvents.bind(this);
    this.renderTicketListings = this.renderTicketListings.bind(this);
    this.renderSales = this.renderSales.bind(this);
    this.renderBoughtTickets = this.renderBoughtTickets.bind(this);
    this.state = {cumulative_sold_price: null, bought_tickets: null, sold_tickets: null, selling_tickets: null};
  }


  ticketsSoldPrice() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/sold/price'
    }).then(res => this.setState({cumulative_sold_price:res.price}))
  }

  ticketsBought() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/bought'
    }).then(tickets => this.setState({bought_tickets: Object.values(tickets)}))
  }


  soldTickets() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/sold'
    }).then(tickets => this.setState({sold_tickets: Object.values(tickets)}))

  }

  ticketsSelling() {
    $.ajax({
      method: 'GET',
      url: 'api/user/tickets/selling'
    }).then(tickets => this.setState({selling_tickets: Object.values(tickets)}))
  }

  componentWillMount() {
    this.props.upcomingEvents();
    this.ticketsSoldPrice();
    this.soldTickets();
    this.ticketsSelling();
    this.ticketsBought();
  }

  componentWillReceiveProps(newProps) {
    if(this.props.events.length !== newProps.events.length) {
    }
  }

  renderUpcomingEvents() {
    if(this.props.events.length === 0){
      return <span className="no-listing-text">You don't have any upcoming events</span>
    } else {
      return this.props.events.map(eventQ =>
        <div className="row event-item-container-with-image">
          <img className="item-img" src={eventQ.img_url}></img>
          <div className="myhub-list-item myhub-list-item-with-image">
            <div>
              <span className="list-item-event-name">{eventQ.name}</span>
            </div>
            <div>
              <span className="list-item-venue-name">{moment(eventQ.date).format('h:mma')} at </span>
              <span className="list-item-venue-name">{eventQ.venue.name} | </span>
              <span className="list-item-venue-name">{eventQ.venue.city}, </span>
              <span className="list-item-venue-name">{eventQ.venue.state}</span>
            </div>
          </div>
        </div>
      )
    }
  }

  renderTicketListings() {
    if(this.state.selling_tickets === 0 || this.state.selling_tickets === null){
      return <span className="no-listing-text">You dont have any listings</span>
    } else {
      return this.state.selling_tickets.map(ticket =>
        <div className="myhub-list-item">
          <div>
            <span className="list-item-event-name">{ticket.event.name} Ticket</span>
          </div>

          <div className="list-item-ticket-info">
            <span className="list-item-venue-name">Price: ${ticket.price} | </span>
            <span className="list-item-venue-name">{ticket.type_of} | </span>
            <span className="list-item-venue-name">Row: {ticket.row}</span>
          </div>
          <div className="list-item-venue-info">
            <span className="list-item-venue-name">{moment(ticket.event.date).format('h:mma')} at </span>
            <span className="list-item-venue-name">{ticket.venue.name} | </span>
            <span className="list-item-venue-name">{ticket.venue.city}, </span>
            <span className="list-item-venue-name">{ticket.venue.state}</span>

          </div>

        </div>
      )
    }
  }

  renderSales() {
    if(this.state.sold_tickets === 0 || this.state.sold_tickets === null){
      return <span className="no-listing-text">You don't have any sales</span>
    } else {
      return this.state.sold_tickets.map(ticket =>
        <div className="myhub-list-item">
          <div>
            <span className="list-item-event-name">{ticket.event.name} Ticket</span>
          </div>

          <div className="list-item-ticket-info">
            <span className="list-item-venue-name">Price: ${ticket.price} | </span>
            <span className="list-item-venue-name">{ticket.type_of} | </span>
            <span className="list-item-venue-name">Row: {ticket.row}</span>
          </div>
          <div className="list-item-venue-info">
            <span className="list-item-venue-name">{moment(ticket.event.date).format('h:mma')} at </span>
            <span className="list-item-venue-name">{ticket.venue.name} | </span>
            <span className="list-item-venue-name">{ticket.venue.city}, </span>
            <span className="list-item-venue-name">{ticket.venue.state}</span>

          </div>

        </div>
      )
    }
  }

  renderBoughtTickets() {
    if(this.state.bought_tickets === 0 || this.state.bought_tickets === null){
      return <span className="no-listing-text">You don't have any listings</span>
    } else {
      return this.state.bought_tickets.map(ticket =>
        <div className="myhub-list-item">
          <div>
            <span className="list-item-event-name">Purchased -  {ticket.event.name} Ticket</span>
          </div>

          <div className="list-item-ticket-info">
            <span className="list-item-venue-name">Price: ${ticket.price} | </span>
            <span className="list-item-venue-name">{ticket.type_of} | </span>
            <span className="list-item-venue-name">Row: {ticket.row}</span>
          </div>
          <div className="list-item-venue-info">
            <span className="list-item-venue-name">{moment(ticket.event.date).format('h:mma')} at </span>
            <span className="list-item-venue-name">{ticket.venue.name} | </span>
            <span className="list-item-venue-name">{ticket.venue.city}, </span>
            <span className="list-item-venue-name">{ticket.venue.state}</span>
          </div>
        </div>
      )
    }
  }

  renderList(type) {
    switch(type) {
      case 'upcoming_events':
        return this.renderUpcomingEvents();
      case 'listings':
        return this.renderTicketListings();
      case 'sales':
        return this.renderSales();
      case 'bought_tickets':
        return this.renderBoughtTickets();
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
            <div className="myhub-scroll-container">
              <div className="list-container">
                {
                  this.renderList('upcoming_events')
                }
              </div>
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
                <span>SALES - <span className="total-price">TOTAL ${this.state.cumulative_sold_price}</span></span>
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
                {
                  this.renderList('bought_tickets')
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserHome;
