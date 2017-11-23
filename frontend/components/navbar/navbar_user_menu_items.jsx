import React from 'react';
import { Link } from 'react-router-dom';


const UserMenuItems = () => {
  
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
          <a className="list-item" href="#"><li>Orders</li></a>
          <a className="list-item" href="#"><li>Listings</li></a>
          <a className="list-item" href="#"><li>Sales</li></a>
          <a className="list-item" href="#"><li>Payements</li></a>
        </ul>
      </li>

      <li>
        <a href="#"><i className="fa fa-user-o lg" aria-hidden="true"></i>Sign in<i className="fa  fa-angle-down"  aria-hidden="true"></i>
        </a>
        <ul className="menu-dropdown">
          <Link to="/session"><li>My Hub</li></Link>
          <a className="list-item" href="#"><li>Activity Feed</li></a>
          <a className="list-item" href="#"><li>Friends</li></a>
          <a className="list-item" href="#"><li>Gift Codes</li></a>
          <a className="list-item" href="#"><li>Settings</li></a>
        </ul>
      </li>

    </ul>
  )
};

export default UserMenuItems;
