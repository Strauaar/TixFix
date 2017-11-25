import React from 'react';

const EventCardItemDetails = ({ date, event }) => {
  console.log(date);
  console.log(new Date(date).getMonth ());
  return (
    <div>
      <p>{new Date(date).getDay()}</p>
    </div>
  )
};

export default EventCardItemDetails;
