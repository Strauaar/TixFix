import React from 'react';
import ScrollTicketItem from '../tickets/scroll_ticket_item';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.renderDetailsHeader = this.renderDetailsHeader.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  renderDetailsHeader() {
    if (Object.keys(this.props.eventQ).length === 0) {
      return null
    } else {
      return <div className="card-detail-container event-show-detail">
        <div className="card-detail-date-block">
          <span className="card-detail-day">{new Date(this.props.eventQ.date).toString().slice(0,3)}
          </span>
          <span className="card-detail-date">
            {new Date(this.props.eventQ.date).toString().slice(4,10)}
          </span>
        </div>
        <div className="card-detail-event-block">
          <p className="card-detail-event-name">{this.props.eventQ.name}</p>
          <span className="card-detail-date-venue">{new Date(this.props.eventQ.date).toString().slice(19, 24)} - {this.props.eventQ.venue.name}</span>
        </div>
      </div>
    }
  }


  render() {
    console.log(this.props.eventQ);

    return (
      <div className="event-show-page">
        <div className="event-show-top">
          {this.renderDetailsHeader()}
        </div>
        <div className="event-show-container">
          <div className="event-show-scroll-container">
            <div className="events-show-filter-block">

            </div>
            <div className="event-show-tickets-container">
              <div className="event-show-ticket-scrollable-container">
                {

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShowPage;
