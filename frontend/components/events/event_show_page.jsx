import React from 'react';
import ScrollTicketItem from '../tickets/scroll_ticket_item';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {
    // TODO: fetch tickets for event
    console.log(this.props.location.state.date);
    
  }



  render() {
    console.log(this.props);
    let { eevent } = this.props;
    let { date } = this.props.location.state;
    console.log(date);
    let day = new Date(date).toString().slice(0,3);
    let dates = new Date(date).toString().slice(4,10);
    let time = new Date(date).toString().slice(19, 24);
    console.log(day);

    return (
      <div className="event-show-container">
        <div className="event-show-scroll-container">
          <div className="events-show-filter-block">

          </div>
          <div className="event-show-tickets-container">
            <div className="event-show-ticket-scrollable-container">
              {

              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShowPage;
