import React from 'react';
import EventCardItem from './event_card_item';
import EventsUlContainer from './events_ul_container';

class EventsList extends React.Component {
  constructor(props) {
    super(props)
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  componentWillReceiveProps(newProps) {
    // if(newProps.match.params.id !== this.props.match.params.id) {
    //   this.props.filterByCategory(newProps.match.params.id)
    // }
  }

  renderHeader() {
    if(this.props.categoryId === 1) {
      return "Concert Tickets"
    } else if (this.props.categoryId === 2) {
      return "Sport Tickets"
    } else if (this.props.categoryId === 3) {
      return "Theater Tickets"
    }
  }

  render() {
    return(
      <div className="events-list-container">
        <div className="events-list-header-container">
          <p className="events-list-header fade-in">{this.renderHeader()}</p>
        </div>
        <EventsUlContainer>
          {
            this.props.events.map(event => <EventCardItem key={event.id} id={event.id} event={event}/>)
          }
        </EventsUlContainer>
      </div>
    )
  }
}

export default EventsList;
