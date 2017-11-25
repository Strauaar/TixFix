import React from 'react';
import EventCardItemDetails from './event_card_item_details';

class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.renderCardHeader = this.renderCardHeader.bind(this);
  }

  renderCardHeader() {
    if(this.props.event.image_url) {
      return <div className="event-card-image" style={{backgroundImage: 'url(' + this.props.event.image_url + ')'}}></div>
    } else {
      return <div className="event-card-header">
        <div className="event-card-header-block">
          <i className="fa fa-heart-o fa-2x header-icon" aria-hidden="true"></i>
          <p className="event-card-header-text">{this.props.event.name}</p>
        </div>
      </div>
    }
  }

  render() {
    return (

      <li className="event-card-block">
        {this.renderCardHeader()}
        <EventCardItemDetails eventQ={this.props.event} />

      </li>
    )
  }
}

export default EventCard;
