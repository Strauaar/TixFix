import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import UserHomeContainer from './user_home_container';
import UserFavContainer from './user_fav_container';

class MyHub extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className="myhub-user-header">
          <div className="myhub-user-pic-container">
            <div className="myhub-user-pic">USERPIC HERE</div>
            <span className="myhub-user-name">USER NAME</span>
          </div>
        </div>
        <div className="myhub-nav-container">
          <div className="myhub-pathname">LINK NAME</div>
          <div className="myhub-list-container">
            <ul className="myhub-ul">
              <li className="myhub-list-item"><NavLink to="/myhub">My Hub</NavLink></li>
              <li className="myhub-list-item"><NavLink to="/myhub/favorites">Favorites</NavLink></li>
            </ul>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/myhub/favorites" component={UserFavContainer} />
            <Route path="/myhub" component={UserHomeContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default MyHub
