import React from 'react';
import LikedCardItemContainer from './liked_card_item_container';

class UserFav extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.state={type: 'performer'}
  }

  componentDidMount() {
    this.props.fetchLikedPerformers();
  }

  renderList() {
    if(this.props.liked.length === 0 || this.props.liked === undefined) {
      return <span>No one here</span>
    } else {
      return this.props.liked.map(item =>
        <LikedCardItemContainer current_user={this.props.currentUser} type={this.state.type} item={item}></LikedCardItemContainer>
      )
    }
  }

  render() {
    return (
      <div className="user-fav-whole-container">
        <div className="user-fav-subcontainer">
          <div className="user-fav-options-container">
            <ul className="user-fav-list">
              <button className="user-fav-button">Performers</button>
              <button className="user-fav-button">Events</button>
            </ul>
          </div>
          <div className="user-fav-note">
            <span>
              Click the heart to remove from favorites
            </span>
          </div>
          <div className="user-fav-card-list-container">
            <ul className="user-fav-card-list">
              {
                this.renderList()
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserFav;
