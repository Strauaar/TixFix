import React from 'react';
import moment from 'moment';

class EventCheckoutPage extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    this.props.fetchEventTicket(this.props.match.params.ticketId);
  }
  render() {
    let { eventQ, ticket } = this.props;
    return (
      <div className="event-ticket-checkout-container">
        <div className="event-ticket-checkout-details">
          <div className="event-detail-header">

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
            <span>Delivery by: <strong>Thu, Dec 28, 2017</strong></span>
          </div>
          <div className="ticket-details-container">
            <div className="ticket-price-block detail-section">
              <span className="ticket-detail-subheader">TICKET PRICE</span>
              <span>${ticket.price}.00 <span className="each">/ea</span></span>
            </div>

          </div>
          <div className="ticket-checkout-button-container">
            <button>Go to checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default EventCheckoutPage;
