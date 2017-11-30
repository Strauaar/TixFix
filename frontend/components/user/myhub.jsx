import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import UserHomeContainer from './user_home_container';
import UserFavContainer from './user_fav_container';
import UserNavBar from './user_navigation_bar';

class MyHub extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className="myhub-user-header">
          <div className="darken-div"></div>
          <div className="myhub-user-pic-container">
            <div className="myhub-user-pic"></div>
            <span className="myhub-user-name">USER NAME</span>
          </div>
        </div>
        <UserNavBar>
          <NavLink activeClassName="nav-selected" exact to="/myhub">My Hub</NavLink>
          <NavLink activeClassName="nav-selected" to="/myhub/favorites">Favorites</NavLink>
        </UserNavBar>
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
