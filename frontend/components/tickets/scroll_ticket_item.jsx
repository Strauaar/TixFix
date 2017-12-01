import React from 'react';
import { Link } from 'react-router-dom';
import TicketItem from './ticket_item';

class ScrollTicketItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.history.push
  }

  render() {
    if(this.props.ticket === undefined) {
      return null;
    }
    return(
      <Link to={`/events/${this.props.ticket.event_id}/ticket/${this.props.ticket.id}`}><div onClick={this.handleClick} className="ticket-item-container">
        <div className="ticket-item">
          <div className="ticket-item-left-block">
            <div className="ticket-type">
              <span>Type: {this.props.ticket.type_of}</span>
            </div>
            <div className="ticket-count-and-shipping">
              <span>1 ticket</span>
              <span>UPS</span>
            </div>
          </div>
          <div className="ticket-item-seat-block">
            <span>Row: {this.props.ticket.row}</span>
          </div>
          <div className="ticket-item-price-block">
            <span className="price">${this.props.ticket.price}</span>
            <span className="ea">/ea</span>
          </div>
        </div>
      </div>
    </Link>
    )
  }
}

export default ScrollTicketItem;
