import React from 'react';
import { merge } from 'lodash';
import EventCardItemContainer from './event_card_item_container';
import EventsUlContainer from './events_ul_container';

class EventsList extends React.Component {
  constructor(props) {
    super(props)
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount() {
    if(this.props.match.pathname="/"){
    }
    this.props.fetchEvents(this.props.filter);
  }

  componentWillReceiveProps(newProps) {
    console.log("new", newProps);
    console.log("old", this.props);
    if( (newProps.match.params.id !== this.props.match.params.id) && (newProps.match.pathname !== this.props.match.pathname) ) {
      if(newProps.match.pathname === "/") {
        this.props.fetchEvents({categoryId: null, location: null, date: null})
      } else {
        this.props.fetchEvents(merge({}, this.props.filter, { categoryId: newProps.match.params.id}))
      }
    }
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
    // if(this.props.events == undefined) {
    //   return null
    // }
    return(
      <div className="events-list-container">
        <div className="events-list-header-container">
          <p className="events-list-header fade-in">{this.renderHeader()}</p>
        </div>
        <EventsUlContainer>
          {
            this.props.events.map(event => <EventCardItemContainer key={event.id} id={event.id} event={event}/>)
          }
        </EventsUlContainer>
      </div>
    )
  }
}

export default EventsList;
