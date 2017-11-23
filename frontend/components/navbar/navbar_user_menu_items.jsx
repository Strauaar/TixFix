import React from 'react';
import { Link } from 'react-router-dom';


const UserMenuItems = ({currentUser}) => {
  const path = (path) => {
    if(currentUser != null) {
      return path;
    } else {
      return "/session";
    }
  };

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
          <Link to={path("/orders")}><li>Orders</li></Link>
          <Link to={path("/listings")}><li>Listings</li></Link>
          <Link to={path("/sales")}><li>Sales</li></Link>
          <Link to={path("/payments")}><li>Payments</li></Link>
        </ul>
      </li>

      <li>
        <a href="#"><i className="fa fa-user-o lg" aria-hidden="true"></i>Sign in<i className="fa  fa-angle-down"  aria-hidden="true"></i>
        </a>
        <ul className="menu-dropdown">
          <Link to={path("/profile")}><li>My Hub</li></Link>
          <Link to={path("/feed")}><li>Activity Feed</li></Link>
          <Link to={path("/friends")}><li>Friends</li></Link>
          <Link to={path("/gift")}><li>Gift Codes</li></Link>
          <Link to={path("/settings")}><li>Settings</li></Link>
        </ul>
      </li>

    </ul>
  )
};

export default UserMenuItems;
