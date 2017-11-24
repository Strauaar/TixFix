import React from 'react';

class EventCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.event.name}
      </div>
    )
  }
}

export default EventCard;
