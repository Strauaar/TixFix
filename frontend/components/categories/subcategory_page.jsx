import React from 'react';

class SubCategoryPage extends React.Component {
  constructor() {
    super();
    this.state = {count: 20}
    this.eventCount = this.eventCount.bind(this);
    this.renderEvents = this.renderEvents.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchSubCategoryEvents(this.props.match.params.id);
  }

  eventCount() {
    let count = 0;
    this.props.events.forEach(eventQ=> {
      count += eventQ.subevents.length;
    })
    return count;
  }

  renderEvents() {
    this.props.events.map(eventQ => {
       return eventQ.subevents.map(subevent => (
        <div className="card-detail-container subcategory-card-detail-container">
          <div className="card-detail-date-block">
            <span className="card-detail-day">{new Date(subevent.date).toString().slice(0,3)}
            </span>
            <span className="card-detail-date">
              {new Date(subevent.date).toString().slice(4,10)}
            </span>
          </div>
          <div className="card-detail-event-block subcategory-event-detail-block">
            <p className="card-detail-event-name">{eventQ.name}</p>
            <span className="card-detail-date-venue">{new Date(subevent.date).toString().slice(19, 24)}  at {eventQ.venue.name}, {eventQ.venue.city}, {eventQ.venue.state}</span>
          </div>
        </div>
      ))
    })
  }

  renderButton() {
    if(this.eventCount() > 10) {
      return <div className="subcategory-more-events-btn-container">
        <button className="subcategory-more-events-btn">
          See more events
        </button>
      </div>
    }
  }

  render() {
    return(
      <div className="subcategory-event-list-container">

        <div className="subcategory-event-list">
          <div className="event-count-container">
            <p className="count-text"><strong>{this.eventCount()}</strong> Upcoming Events</p>
          </div>
          <div id="sub">
            {
              this.props.events.map(eventQ => {
                 return eventQ.subevents.map(subevent => (
                  <div className="card-detail-container subcategory-card-detail-container">
                    <div className="card-detail-date-block">
                      <span className="card-detail-day">{new Date(subevent.date).toString().slice(0,3)}
                      </span>
                      <span className="card-detail-date">
                        {new Date(subevent.date).toString().slice(4,10)}
                      </span>
                    </div>
                    <div className="card-detail-event-block subcategory-event-detail-block">
                      <p className="card-detail-event-name">{eventQ.name}</p>
                      <span className="card-detail-date-venue">{new Date(subevent.date).toString().slice(19, 24)}  at {eventQ.venue.name}, {eventQ.venue.city}, {eventQ.venue.state}</span>
                    </div>
                  </div>
                ))
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

export default SubCategoryPage;
