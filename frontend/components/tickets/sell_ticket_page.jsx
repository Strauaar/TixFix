import React from 'react';
import moment from 'moment';


class SellTicketPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){
    console.log(this.props);
  }
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  render() {
    if (this.props.eventQ === undefined) {
      console.log("UNDEF");
      return null
    } else {
      const month = moment(this.props.eventQ.date).format('MMM');
      const day = moment(this.props.eventQ.date).format('DD');
      const dayString = moment(this.props.eventQ.date).format('ddd');
      const time = moment(this.props.eventQ.date).format('h:MMa');
      return (
        <div className="sell-ticket-whole-container">
          <div className="sell-ticket-block">
            <div className="sell-ticket-header"> <span>FILL US IN ON YOUR TICKETS</span></div>

            <div className="card-detail-container subcategory-card-detail-container ticket-sale">
              <div className="card-detail-date-block">
                <span className="card-detail-day">{dayString}
                </span>
                <span className="card-detail-date">
                  {month} {day}
                </span>
              </div>
              <div className="card-detail-event-block subcategory-event-detail-block">
                <p className="card-detail-event-name">{this.props.name}</p>
                <span className="card-detail-date-venue">{time}  at {this.props.venue_name}, {this.props.city}, {this.props.state}</span>
              </div>
            </div>
            <div className="form-container">
              <div className="num-tickets-container">
                <span>HOW MANY TICKETS DO YOU HAVE?</span>
                <div className="num-tickets-selector">
                  DROPDOWN
                </div>
              </div>
              <div className="seats-container">
                <div className="seats-header-container">
                  <span></span>
                  <span className="seats-text">WHERE ARE YOUR SEATS?</span>
                </div>
                <div className="section-row-input-block">
                  <div className="seat-input-block">
                    <span>SECTION</span>
                    <input></input>
                  </div>
                  <div className="seat-input-block">
                    <span>ROW</span>
                    <input></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-ticket-btn-container">
              <button className="post-ticket-btn">Post my tickets</button>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default SellTicketPage;
