import React from 'react';
import { Route } from 'react-router-dom';
import NavBarMiscHelp from './navbar_misc_menu_items';
import UserMenuItems from './navbar_user_menu_items';
import SessionsModalContainer from '../session/sessions_modal_container';
import SearchBarContainer from './searchbar_container';
import { AuthRoute, ProtectedRoute } from '../../utils/route_util';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <div className="navbar">
          <div className="navbar-left">

          </div>
          <div className="navbar-right">

            <NavBarMiscHelp/>
            <UserMenuItems currentUser={this.props.currentUser}/>

          </div>

        </div>
        <Route path="/new" component={SessionsModalContainer}></Route>
        <Route path="/session" component={SessionsModalContainer}></Route>
        <Route exact path="/" component={SearchBarContainer}></Route>
      </div>
    )
  }
}

export default NavBar;
