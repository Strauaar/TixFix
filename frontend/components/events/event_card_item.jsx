import React from 'react';
import { Link } from 'react-router-dom';
import EventCardItemDetails from './event_card_item_details';

class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.renderCardHeader = this.renderCardHeader.bind(this);
  }

  renderCardHeader() {
    if(this.props.event.image_url) {
      return <div className="event-card-image fade-in" style={{backgroundImage: 'url(' + this.props.event.image_url + ')'}}>
        <div className="event-card-header-block in-image">
          <div className="header-icon-box"><i className="fa fa-heart fa-2x header-icon in-image-icon" aria-hidden="true"></i></div>
          <p className="event-card-header-text in-image-text">{this.props.event.performer.name}</p>
        </div>
        <div className="event-card-image-layer"></div>
      </div>
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
      <div className="top-event-card-block fade-in">

        <li className="event-card-block fade-in" >
          {this.renderCardHeader()}

          <EventCardItemDetails eventQ={this.props.event}/>


        </li>
      </div>
    )
  }
}

export default EventCard;
