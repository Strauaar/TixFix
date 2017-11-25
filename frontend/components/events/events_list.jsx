import React from 'react';
import EventCardItem from './event_card_item';
import EventsUl from './events_ul';

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
        <EventsUl>
          {
            this.props.events.map( event => <EventCardItem event={event}/>)
          }
        </EventsUl>
      </div>
    )
  }
}

export default EventsList;
