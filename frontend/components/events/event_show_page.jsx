import React from 'react';
import ScrollTicketItem from '../tickets/scroll_ticket_item';
import moment from 'moment';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.renderDetailsHeader = this.renderDetailsHeader.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    console.log(this.props);
    console.log(newProps);
    if(Object.values(this.props.eventQ).length !== Object.values(newProps.eventQ).length){
      this.props.fetchEvent(newProps.match.params.id)
    }
  }

  renderDetailsHeader() {
    if (!this.props.eventQ) {
      return null
    } else {
      const month = moment(this.props.eventQ.date).format('MMM');
     const day = moment(this.props.eventQ.date).format('DD');
     const dayString = moment(this.props.eventQ.date).format('ddd');
     const time = moment(this.props.eventQ.date).format('h:MMa');
      return <div className="card-detail-container event-show-detail">
        <div className="card-detail-date-block event-show-detail-date-block">
          <span className="card-detail-day event-show-day-text">{dayString}
          </span>
          <span className="card-detail-date event-show-date-text">
            {month} {day}
          </span>
        </div>
        <div className="card-detail-event-block event-show-card-block">
          <p className="card-detail-event-name event-show-detail-name">{this.props.eventQ.name}</p>
          <span className="card-detail-date-venue event-show-detail-venue">{time} at {this.props.eventQ.venue}, {this.props.eventQ.city}, {this.props.eventQ.state}</span>
        </div>
      </div>
    }
  }


  render() {


    return (
      <div className="event-show-page">
        <div className="event-show-top">
          {this.renderDetailsHeader()}
        </div>
        <div className="event-show-container">
          <div className="event-show-scroll-container">
            <div className="events-show-filter-block">
              <div>
              </div>
            </div>
            <div className="event-show-tickets-container">
              <div className="event-show-ticket-scrollable-container">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShowPage;
