import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const EventCardItemDetails = ({ eventQ }) => {
  return (
    <div>
      {
        eventQ.subevents.map(subevent =>{
          const month = moment(subevent.date).format('MMM');
          const day = moment(subevent.date).format('DD');
          const dayString = moment(subevent.date).format('ddd');
          const time = moment(subevent.date).format('h:MMa');
          return <Link to={`/events/${subevent.id}`}>
            <div className="card-detail-container">
              <div className="card-detail-date-block">
                <span className="card-detail-day">{dayString}
                </span>
                <span className="card-detail-date">
                  {month} {day}
                </span>
              </div>
              <div className="card-detail-event-block">
                <p className="card-detail-event-name">{eventQ.name}</p>
                <span className="card-detail-date-venue">{time} - {eventQ.venue.name}</span>
              </div>
            </div>
          </Link>
        })
      }
    </div>

  )
};

export default EventCardItemDetails;
