import React from 'react';
import ScrollTicketItem from '../tickets/scroll_ticket_item';
import moment from 'moment';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.renderDetailsHeader = this.renderDetailsHeader.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.state = {clicked: false}
  }

  componentWillMount(){
    this.props.fetchEvent(this.props.match.params.id);
    this.props.fetchEventTickets(this.props.match.params.id);
  }

  handleLikeClick(type) {
    console.log(this.props.current_user.id, "user");
    console.log(this.props.match.params.id, "path");
    if(this.props.current_user === null) {
      this.props.history.push("/session")
    } else if (type === 'unlike') {
      this.props.deleteEventLike(this.props.current_user.id, this.props.match.params.id)
      this.setState({clicked: false})
    } else if (type === 'like') {
      this.props.createEventLike(this.props.current_user.id, this.props.match.params.id)
      this.setState({clicked: true})

    }
  }

  renderHeart(){
    if(this.props.liked_events_ids.includes(this.props.eventQ.id)){
      return <div className="header-icon-box" onClick={()=> this.handleLikeClick('unlike')}><i className="fa fa-heart fa-2x header-icon in-image-icon liked-icon" aria-hidden="true"></i></div>
    } else {
      return <div className="header-icon-box" onClick={() => this.handleLikeClick('like')}><i className="fa fa-heart fa-2x header-icon in-image-icon" aria-hidden="true"></i></div>
    }
  }

  componentWillReceiveProps(newProps) {
    if(Object.values(this.props.eventQ).length !== Object.values(newProps.eventQ).length){
      this.props.fetchEvent(newProps.match.params.id)
    }
  }

  renderDetailsHeader() {
    if (!this.props.eventQ) {
      return null
    } else {
      const month = moment(this.props.eventQ.date).format('MMM');
     const day = moment(this.props.eventQ.date).format('DD');
     const dayString = moment(this.props.eventQ.date).format('ddd');
     const time = moment(this.props.eventQ.date).format('h:MMa');
      return <div className="card-detail-container event-show-detail">
        <div className="card-detail-date-block event-show-detail-date-block">
          <span className="card-detail-day event-show-day-text">{dayString}
          </span>
          <span className="card-detail-date event-show-date-text">
            {month} {day}
          </span>
        </div>
        <div className="card-detail-event-block event-show-card-block">
          <p className="card-detail-event-name event-show-detail-name">{this.props.eventQ.name}</p>
          <span className="card-detail-date-venue event-show-detail-venue">{time} at {this.props.eventQ.venue}, {this.props.eventQ.city}, {this.props.eventQ.state}</span>
        </div>
      </div>
    }
  }


  render() {
    return (
      <div className="event-show-page">
        <div className="event-show-top">
          {this.renderDetailsHeader()}
        </div>
        <div className="event-show-like-container">
          {this.renderHeart()}
        </div>
        <div className="event-show-container">
          <div className="event-show-scroll-container">
            <div className="events-show-filter-block">
              <div>
              </div>
            </div>
            <div className="event-show-tickets-container">
              <div className="event-show-ticket-scrollable-container">
                {
                  this.props.tickets.map(ticket => (
                    <ScrollTicketItem ticket={ticket} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventShowPage;
