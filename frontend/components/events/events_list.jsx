import React from 'react';
import EventCardItem from './event_card_item';
import EventsUlContainer from './events_ul_container';

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
        <EventsUlContainer>
          {
            this.props.events.map( event => <EventCardItem event={event}/>)
          }
        </EventsUlContainer>
      </div>
    )
  }
}

export default EventsList;
