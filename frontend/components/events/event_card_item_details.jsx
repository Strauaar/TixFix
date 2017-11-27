import React from 'react';
import { Link } from 'react-router-dom';

const EventCardItemDetails = ({ eventQ }) => {
  console.log(eventQ);
  return (
    <div>
      {
        eventQ.subevents.map(subevent =>(
          <Link to={{
            pathname: `/events/${subevent.id}`
          }}>
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
          </Link>
        ))
      }
    </div>

  )
};

export default EventCardItemDetails;
