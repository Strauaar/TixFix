import React from 'react';

class LikedCardItem extends React.Component {
  constructor(props){
    super(props)
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.state = {liked: true}
  }

  handleLikeClick(type){
    switch(type){
      case 'performer':
        this.props.deletePerformerLike(this.props.current_user.id, this.props.item.id)
        this.setState({liked:false})
      default:
      return null;
    }
  }

  render() {
    if (this.state.liked === false) {
      return null
    } else {
    return(
      <div className="liked-card">
          <div className="liked-card-image" style={{backgroundImage: `url(${this.props.item.img_url})`}}></div>
          <div>
            <div className="header-icon-box" onClick={()=> this.handleLikeClick(this.props.type)}>
              <i className="fa fa-heart fa-2x header-icon in-image-icon liked-icon" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default LikedCardItem;
