import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

class SubCategoryPage extends React.Component {
  constructor() {
    super();
    this.state = {count: 20};
    this.eventCount = this.eventCount.bind(this);
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
                 return eventQ.subevents.map(subevent => {
                   const month = moment(subevent.date).format('MMM');
                   const day = moment(subevent.date).format('DD');
                   const dayString = moment(subevent.date).format('ddd');
                   const time = moment(subevent.date).format('h:MMa');
                  return <Link className="subcategory-card-link-container" to={`/events/${subevent.id}`}>
                    <div className="card-detail-container subcategory-card-detail-container">
                      <div className="card-detail-date-block">
                        <span className="card-detail-day">{dayString}
                        </span>
                        <span className="card-detail-date">
                          {month} {day}
                        </span>
                      </div>
                      <div className="card-detail-event-block subcategory-event-detail-block">
                        <p className="card-detail-event-name">{eventQ.name}</p>
                        <span className="card-detail-date-venue">{time}  at {eventQ.venue.name}, {eventQ.venue.city}, {eventQ.venue.state}</span>
                      </div>
                    </div>
                  </Link>
                })
              })
            }
          </div>

        </div>
      </div>
    )
  }
}

export default SubCategoryPage;
