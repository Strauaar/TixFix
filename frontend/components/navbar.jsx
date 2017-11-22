import React from 'react';

class NavBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <div className="navbar">
          <div className="navbar-left">

          </div>
          <div className="navbar-right">
            <ul className="misc-help">
              <li><a href="#">Gift cards</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#"><i className="fa fa-bell lg"></i></a></li>
              <li><a href="#"><i className="fa fa-globe fa-lg" aria-hidden="true"></i>English</a></li>
            </ul>

            <ul className="sign-in-row">
              <li><a href="#"><i class="fa fa-envelope-open-o" aria-hidden="true"></i>
Sell tickets</a></li>
              <li>
                <a href="#"><i class="fa fa-ticket lg" aria-hidden="true"></i>
                  My tickets<i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul className="my-tickets-menu-dropdown">
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Listings</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Payments</a></li>
                </ul>

              </li>
              <li><a href="#"><i class="fa fa-user-o lg" aria-hidden="true"></i>Profile<i class="fa fa-angle-down" aria-hidden="true"></i>
</a></li>
            </ul>
          </div>

        </div>

      </div>
    )
  }
}

export default NavBar;
