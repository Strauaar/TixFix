import React from 'react';
import { Route } from 'react-router-dom';
import NavBarMiscHelp from './navbar_misc_menu_items';
import UserMenuItems from './navbar_user_menu_items';
import SessionsModalContainer from '../session/sessions_modal_container';
import SearchBarContainer from './searchbar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
import LocationDateFilterContainer from './location_date_filter_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="wholenav">
        <div className="navbar">
          <div className="navbar-left">
            <span>TF<span className="small-header"></span><span className="small-header"></span></span>
            <div className="title-container">
            </div>
          </div>
          <div className="navbar-right">
            <NavBarMiscHelp/>
            <UserMenuItems currentUser={this.props.currentUser} logout={this.props.logout}/>
          </div>
        </div>
        <Route path="/" component={SearchBarContainer}></Route>
        <LocationDateFilterContainer />
        <Route path="/new" component={SessionsModalContainer}></Route>
        <AuthRoute path="/session" component={SessionsModalContainer}></AuthRoute>
      </div>
    )
  }
}

export default NavBar;
