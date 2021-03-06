import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarMiscHelp from './navbar_misc_menu_items';
import UserMenuItems from './navbar_user_menu_items';
import SessionsModalContainer from '../session/sessions_modal_container';
import SearchBarContainer from './searchbar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import LocationDateFilterContainer from './location_date_filter_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.homeButton = this.homeButton.bind(this);
  }

  homeButton() {
    this.props.history.push("/");
  }

  render() {
    return(
      <div className="wholenav">
        <div className="navbar">
          <div className="navbar-left">
            <span onClick={this.homeButton}>TF<span className="small-header"></span><span className="small-header"></span></span>
            <div className="title-container">
            </div>
          </div>
          <div className="navbar-right">
            <NavBarMiscHelp/>
            <UserMenuItems currentUser={this.props.currentUser} logout={this.props.logout}/>
          </div>
        </div>



        <AuthRoute path="/new" component={SessionsModalContainer}></AuthRoute>
        <AuthRoute path="/session" component={SessionsModalContainer}></AuthRoute>
      </div>
    )
  }
}

export default NavBar;
