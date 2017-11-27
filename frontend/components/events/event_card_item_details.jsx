import React from 'react';
import { Link } from 'react-router-dom';

const EventCardItemDetails = ({ eventQ }) => {

  return (
    <div>
      {
        eventQ.dates.map(date => (
          <Link to={{
            pathname: `/events/${eventQ.id}`,
            state: { date }
          }}>
            <div className="card-detail-container">
              <div className="card-detail-date-block">
                <span className="card-detail-day">{new Date(date).toString().slice(0,3)}
                </span>
                <span className="card-detail-date">
                  {new Date(date).toString().slice(4,10)}
                </span>
              </div>
              <div className="card-detail-event-block">
                <p className="card-detail-event-name">{eventQ.name}</p>
                <span className="card-detail-date-venue">{new Date(date).toString().slice(19, 24)} - {eventQ.venue.name}</span>
              </div>
            </div>
          </Link>
        ))
      }
    </div>

  )
};

export default EventCardItemDetails;
