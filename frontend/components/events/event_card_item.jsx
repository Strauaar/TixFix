import React from 'react';

class EventCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="event-card-block">
        {this.props.event.name}
      </li>
    )
  }
}

export default EventCard;
