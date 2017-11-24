import React from 'react';
import EventCard from './event_card_item';

class EventsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.events.map( event => <EventCard event={event}/>)
          }
        </ul>
      </div>
    )
  }
}

export default EventsList;
