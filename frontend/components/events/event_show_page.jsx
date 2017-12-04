import React from 'react';
import ScrollTicketItem from '../tickets/scroll_ticket_item';
import moment from 'moment';

class EventShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.renderDetailsHeader = this.renderDetailsHeader.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.renderScrollList= this.renderScrollList.bind(this);

    this.state = {clicked: false}
  }

  componentWillMount(){
    this.props.fetchEvent(this.props.match.params.id);
    this.props.fetchEventTickets(this.props.match.params.id);
    this.props.fetchEventLikes();
  }

  handleLikeClick(type) {
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
      return <div className="header-icon-box event-show-like-box liked-box-event" onClick={()=> this.handleLikeClick('unlike')}><i className="fa fa-heart fa-3x header-icon in-image-icon liked-icon shade show-event-liked" aria-hidden="true"></i></div>
    } else {
      return <div className="header-icon-box event-show-like-box unliked-box-event" onClick={() => this.handleLikeClick('like')}><i className="fa fa-heart fa-3x header-icon in-image-icon shade" aria-hidden="true"></i></div>
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

  renderScrollList() {
    if (this.props.tickets.length === 0 ) {
      return <div className="no-tickets-container"><span className="no-tickets-text">No tickets being sold</span></div>
    } else {
      return this.props.tickets.map(ticket => (
        <ScrollTicketItem ticket={ticket} />
      ))
    }
  }

  render() {
    if (this.props.eventQ === undefined || this.props.tickets === undefined || this.props.liked_event_ids === undefined) {
      return null;
    }
    return (
      <div className="event-show-page">
        <div className="event-show-top">
          {this.renderDetailsHeader()}
        </div>

        <div className="event-show-container">

          <div className="event-show-scroll-container">

            <div className="events-show-filter-block">
              <div className="event-show-like-container">
                {this.renderHeart()}
              </div>
            </div>
            <div className="event-show-tickets-container">
              <div className="event-show-ticket-scrollable-container">
                {
                  this.renderScrollList()
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
