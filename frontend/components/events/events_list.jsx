import React from 'react';

class EventsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <button onClick={this.props.fetchEvents}>
        CLICK MEEEEE
      </button>
    )
  }
}

export default EventsList;
