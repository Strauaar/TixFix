import React from 'react';

class SubCategoryPage extends React.Component {
  constructor() {
    super()
    this.eventCount = this.eventCount.bind(this);
  }

  componentDidMount() {
    this.props.fetchSubCategoryEvents(this.props.match.params.id);
  }

  eventCount() {
    let count = 0;
    this.props.events.forEach(eventQ=> {
      count += eventQ.subevents.length;
    })
    return `${count}`
  }

  render() {
    return(
      <div className="subcategory-event-list-container">

        <div className="subcategory-event-list">
          <div className="event-count-container">
            <p className="count-text"><strong>{this.eventCount()}</strong> Upcoming Events</p>
          </div>
          {
            this.props.events.map(eventQ => {
              return eventQ.subevents.map(subevent => (
                <div className="card-detail-container">
                  <div className="card-detail-date-block">
                    <span className="card-detail-day">{new Date(subevent.date).toString().slice(0,3)}
                    </span>
                    <span className="card-detail-date">
                      {new Date(subevent.date).toString().slice(4,10)}
                    </span>
                  </div>
                  <div className="card-detail-event-block">
                    <p className="card-detail-event-name">{eventQ.name}</p>
                    <span className="card-detail-date-venue">{new Date(subevent.date).toString().slice(19, 24)} - {eventQ.venue.name}</span>
                  </div>
                </div>
              ))
            })
          }
        </div>
      </div>
    )
  }
}

export default SubCategoryPage;
