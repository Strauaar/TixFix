import React from 'react';
import moment from 'moment';

class LikedCardItem extends React.Component {
  constructor(props){
    super(props)
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.renderDates = this.renderDates.bind(this);
    this.state = {liked: true}
  }

  handleLikeClick(type){
    switch(type){
      case 'performer':
        this.props.deletePerformerLike(this.props.current_user.id, this.props.item.id)
        this.setState({liked:false})
      case 'event':
        this.props.deleteEventLike(this.props.current_user.id, this.props.item.id)
        this.setState({liked:false})
      default:
      return null;
    }
  }

  renderDates() {

    if(this.props.type === 'event'){
      const month = moment(this.props.item.date).format('MMM');
      const day = moment(this.props.item.date).format('DD');
      const dayString = moment(this.props.item.date).format('ddd');
      const time = moment(this.props.item.date).format('h:MMa');
      return <span className="event-card-date">   {month}, {day} - {time} | {this.props.item.name}</span>
    }
  }

  render() {
    if (this.state.liked === false) {
      return null
    } else {
    return(
      <div className="liked-card">
          <div className="liked-card-image" style={{backgroundImage: `url(${this.props.item.img_url})`}}></div>
          <div className="liked-card-tag"><span>on tour</span></div>
          <div className="liked-card-footer">
            <div className="header-icon-box" onClick={()=> this.handleLikeClick(this.props.type)}>
              <i className="fa fa-heart fa-2x header-icon in-image-icon liked-icon" aria-hidden="true"></i>
            </div>
            <div>
              <span>{this.props.item.name}</span>
              {
                this.renderDates()
              }
            </div>
          </div>
        </div>
      )
    }
  }
}

export default LikedCardItem;
