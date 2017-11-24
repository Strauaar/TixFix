import React from 'react';

class EventsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.props.events.map( event => <li>{event.name}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default EventsList;
