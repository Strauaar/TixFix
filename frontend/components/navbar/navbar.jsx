import React from 'react';
import { Route } from 'react-router-dom';
import NavBarMiscHelp from './navbar_misc_menu_items';
import UserMenuItems from './navbar_user_menu_items';
import SessionsModalContainer from '../session/sessions_modal_container';
import SearchBarContainer from './searchbar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';
// import LocationDateFilter from './location_date_filter';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="wholenav">
        <div className="navbar">
          <div className="navbar-left">
            <span>
              T<span className="small-header">ix</span>F<span className="small-header">ix</span>
            </span>
          </div>
          <div className="navbar-right">
            <NavBarMiscHelp/>
            <UserMenuItems currentUser={this.props.currentUser}/>
          </div>
        </div>
        <Route exact path="/" component={SearchBarContainer}></Route>

        <Route path="/new" component={SessionsModalContainer}></Route>
        <Route path="/session" component={SessionsModalContainer}></Route>
      </div>
    )
  }
}

export default NavBar;
