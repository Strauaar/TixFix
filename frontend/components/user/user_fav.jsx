import React from 'react';
import LikedCardItemContainer from './liked_card_item_container';

class UserFav extends React.Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.renderButtonClass = this.renderButtonClass.bind(this);
    this.handleTypeClick = this.handleTypeClick.bind(this);
    this.state={type: 'performer'}
  }

  componentDidMount() {
    this.props.fetchLikedPerformers();
  }

  renderButtonClass(typeClicked) {
    if(this.state.type === typeClicked) {
      return "user-fav-button user-fav-button-clicked ease-up"
    } else {
      return "user-fav-button"
    }
  }


  renderList() {
    if(this.props.liked.length === 0 || this.props.liked === undefined) {
      return <span>{`No ${this.state.type}s here`}</span>
    } else {
      return this.props.liked.map(item =>
        <LikedCardItemContainer current_user={this.props.currentUser} type={this.state.type} item={item}></LikedCardItemContainer>
      )
    }
  }

  handleTypeClick(typeClicked) {
    switch(typeClicked) {
      case 'performer':
        this.setState({type: typeClicked});
        this.props.fetchLikedPerformers();
      case 'event':
        this.setState({type: typeClicked});
        this.props.fetchLikedEvents();
      default:
        return null;
    }
  }

  render() {
    if(this.props.loading === null) {
      return null
    }
    return (
      <div className="user-fav-whole-container">
        <div className="user-fav-subcontainer">
          <div className="user-fav-options-container">
            <ul className="user-fav-list">
              <button onClick={() => this.handleTypeClick('performer')} className={this.renderButtonClass('performer')}>Performers</button>
              <button onClick={() => this.handleTypeClick('event')} className={this.renderButtonClass('event')}>Events</button>
            </ul>
          </div>
          <div className="user-fav-note">
            <span>
              Click the heart to remove from favorites
            </span>
          </div>
          <div className="user-fav-card-list-container">
            {
               this.props.loading ? <div className="loader">Loading...</div> :<ul className="user-fav-card-list">
                  {
                    this.renderList()
                  }
                </ul>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default UserFav;
