import React from 'react';
import { Link } from 'react-router-dom';
import EventCardItemDetails from './event_card_item_details';

class EventCard extends React.Component {
  constructor(props) {
    super(props)
    this.renderCardHeader = this.renderCardHeader.bind(this);
    this.renderHeart = this.renderHeart.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  handleLikeClick(type) {
    if(this.props.current_user === null) {
      this.props.history.push("/session")
    } else if (type === 'unlike') {
      this.props.deletePerformerLike(this.props.current_user.id, this.props.event.performer.id)
    } else if (type === 'like') {
      this.props.createPerformerLike(this.props.current_user.id, this.props.event.performer.id)
    }
  }

  renderHeart(){
    if(this.props.liked_performers_ids.includes(this.props.event.performer.id)){
      return <div className="header-icon-box" onClick={()=> this.handleLikeClick('unlike')}><i className="fa fa-heart fa-2x header-icon in-image-icon liked-icon" aria-hidden="true"></i></div>
    } else {
      return <div className="header-icon-box" onClick={() => this.handleLikeClick('like')}><i className="fa fa-heart fa-2x header-icon in-image-icon" aria-hidden="true"></i></div>
    }
  }

  renderCardHeader() {
    if(this.props.event.image_url) {
      let heart = this.renderHeart();
      return <div className="event-card-image fade-in" style={{backgroundImage: 'url(' + this.props.event.image_url + ')'}}>
        <div className="event-card-header-block in-image">
          {heart}
          <p className="event-card-header-text in-image-text">{this.props.event.performer.name}</p>
        </div>
        <div className="event-card-image-layer"></div>
      </div>
    } else {
        if(this.props.liked_performers_ids.includes(this.props.event.performer.id)){
          return <div className="event-card-header">
            <div className="event-card-header-block">
              <i onClick={()=> this.handleLikeClick('unlike')} className="fa fa-heart-o fa-2x header-icon liked-icon-no-image" aria-hidden="true"></i>
              <p className="event-card-header-text">{this.props.event.performer.name}</p>
            </div>
          </div>
        } else {
          return <div className="event-card-header">
            <div className="event-card-header-block">
              <i onClick={()=> this.handleLikeClick('like')} className="fa fa-heart-o fa-2x header-icon" aria-hidden="true"></i>
              <p className="event-card-header-text">{this.props.event.name}</p>
            </div>
          </div>
        }
      }
  }

  render() {
    return (
      <div className="top-event-card-block fade-in">

        <li className="event-card-block fade-in" >
          {this.renderCardHeader()}
          <EventCardItemDetails eventQ={this.props.event}/>
        </li>
      </div>
    )
  }
}

export default EventCard;
