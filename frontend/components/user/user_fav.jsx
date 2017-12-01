import React from 'react';

class UserFav extends React.Component {
  constructor(props) {
    super(props)
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
              PUT LIST HERE
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserFav;
