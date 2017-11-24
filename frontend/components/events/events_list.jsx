import React from 'react';
import EventCardItem from './event_card_item';

class EventsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return(
      <div className="events-list-container">
        <ul className="event-list">
          {
            this.props.events.map( event => <EventCardItem event={event}/>)
          }
        </ul>
      </div>
    )
  }
}

export default EventsList;
