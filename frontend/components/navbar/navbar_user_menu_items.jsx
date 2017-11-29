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
      <li><a href="#"> <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
        Sell tickets</a>
      </li>

      <li>
        <a href="#"><i className="fa fa-ticket lg" aria-hidden="true"></i>
        My tickets<i className="fa fa-angle-down" aria-hidden="true"></i>
        </a>
        <ul className="menu-dropdown">

        </ul>
      </li>

      <li>
        <a href="#"><i className="fa fa-user-o lg" aria-hidden="true"></i>  {renderMenuItem()}<i className="fa  fa-angle-down"  aria-hidden="true"></i>
        </a>
        <ul className="menu-dropdown">
          <Link to={path("/user")}><li>My Hub</li></Link>
          {renderSignOut()}
        </ul>
      </li>

    </ul>
  )
};

export default UserMenuItems;
