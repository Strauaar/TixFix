import React from 'react';
import TicketItem from './ticket_item';

class ScrollTicketItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("TICKET");
    console.log(this.props.ticket);
    return(
      <div className="ticket-item-container">
        <div className="ticket-item">
          <div className="ticket-item-left-block">
            <div className="ticket-type">
              <span>General Admission</span>
            </div>
            <div className="ticket-count-and-shipping">
              <span>1 ticket</span>
              <span>UPS</span>
            </div>
          </div>
          <div className="ticket-item-seat-block">
            <span>GA</span>
          </div>
          <div className="ticket-item-price-block">
            <span>$120</span>
            <span>/ea</span>
          </div>
        </div>
      </div>
    )
  }
}

export default ScrollTicketItem;
