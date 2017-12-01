import React from 'react';
import moment from 'moment';

class EventCheckoutPage extends React.Component {
  constructor(props){
    super(props);
    this.updateTicket = this.updateTicket.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    this.props.fetchEventTicket(this.props.match.params.ticketId);
  }

  updateTicket(ticketId, user) {
    if (user === null) {
      this.props.history.push("/session")
    } else {
      $.ajax({
        method: 'PATCH',
        url: `api/tickets/${ticketId}`,
        data: { user_id: user.id }
      }).then(res =>  this.props.history.push("/myhub"))

    }
  }

  render() {
    let { eventQ, ticket, currentUser } = this.props;
    const month = moment(eventQ.date).format('MMM');
    const day = moment(eventQ.date).format('DD');
    const dayString = moment(eventQ.date).format('ddd');
    const time = moment(eventQ.date).format('h:MMa');
    return (
      <div className="event-ticket-checkout-container">
        <div className="event-ticket-checkout-details">
          <div className="event-detail-header">

            <div className="card-detail-container checkout-event-detail">
              <div className="card-detail-date-block event-show-detail-date-block">
                <span className="card-detail-day event-show-day-text">{dayString}
                </span>
                <span className="card-detail-date event-show-date-text">
                  {month} {day}
                </span>
              </div>
              <div className="card-detail-event-block event-show-card-block">
                <p className="card-detail-event-name event-show-detail-name">{this.props.eventQ.name}</p>
                <span className="card-detail-date-venue event-show-detail-venue">{time} at {this.props.eventQ.venue}, {this.props.eventQ.city}, {this.props.eventQ.state}</span>
              </div>
            </div>

          </div>
          <div className="selected-seats-container">
            <p>SELECTED SEATS</p>
            <div className="seats-sub-container">
              <div className="section-detail detail-section">
                <span className="ticket-detail-subheader">SECTION</span>
                <span>{ticket.type_of}</span>
                <span>Seat printed on ticket</span>
              </div>
              <div className="row-detail detail-section">
                <span className="ticket-detail-subheader">ROW</span>
                <span>{ticket.row}</span>
              </div>
              <div className="seat-detail detail-section">
                <span className="ticket-detail-subheader">SEATS</span>
                <span>-</span>
              </div>
            </div>
          </div>
          <div className="delivery-method-container detail-section">
            <span className="ticket-detail-subheader">DELIVERY</span>
            <span>UPS</span>
            <span>Delivery by: <strong>{moment().add(4, 'days').format('ddd, MMM DD, YYYY')}</strong></span>
          </div>
          <div className="ticket-details-container">
            <div className="ticket-price-block detail-section">
              <span className="ticket-detail-subheader">TICKET PRICE</span>
              <span>${ticket.price}.00 <span className="each">/ea</span></span>
            </div>

          </div>
          <div className="ticket-checkout-button-container">
            <button onClick={() => this.updateTicket(ticket.id, currentUser)}>Go to checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EventCheckoutPage;
