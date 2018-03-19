import React from 'react';
import { Link } from 'react-router-dom';


const UserMenuItems = ({currentUser, logout}) => {
  const path = (path) => {
    if(currentUser != null) {
      return path;
    } else {
      return "/session";
    }
  };

  const renderSignOut = () => {
    if(currentUser !== null) {
      return (
        <Link to="/" onClick={()=>logout()}><li>Sign out</li></Link>
      )
    }
  }

  const renderMenuItem = () => {
    if(currentUser !== null) {
      return "Profile"
    } else {
      return "Sign in"
    }
  }

  return (
    <ul className="sign-in-row">
      <li><Link to="/tickets/sell"><i className="fa fa-envelope-open-o" aria-hidden="true"></i>
        Sell tickets</Link>
      </li>
      <li>
        <a href="#"><i className="fa fa-user-o lg" aria-hidden="true"></i>  {renderMenuItem()}<i className="fa  fa-angle-down"  aria-hidden="true"></i>
        </a>
        <ul className="menu-dropdown">
          <Link to={path("/myhub")}><li>My Hub</li></Link>
          {renderSignOut()}
        </ul>
      </li>

    </ul>
  )
};

export default UserMenuItems;
