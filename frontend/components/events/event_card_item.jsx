import React from 'react';
import EventCardItemDetails from './event_card_item_details';

class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.renderImage = this.renderImage.bind(this);
  }

  renderImage() {
    if(this.props.event.image_url) {
      return <div className="event-card-image" style={{backgroundImage: 'url(' + this.props.event.image_url + ')'}}></div>
    }
  }

  render() {
    return (

      <li className="event-card-block">
        {this.renderImage()}
        <EventCardItemDetails eventQ={this.props.event} />

      </li>
    )
  }
}

export default EventCard;
