import React from 'react';
import SessionsModalContainer from './sessions_modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.checkSignIn = this.checkSignIn.bind(this);
  }

  checkSignIn() {
    
  }

  render() {
    $("body").on("click", ".js-modal-open", function(event){
      event.preventDefault();
      $(".modal").addClass("is-open");
    });
    $("body").on("click", ".js-modal-close", function(event){
      event.preventDefault();
      $(".modal").removeClass("is-open");
    });
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
                  <a className="list-item" className="js-modal-open" href="#"><li>My Hub</li></a>
                  <a className="list-item" onClick={this.checkSignIn} href="#"><li>Activity Feed</li></a>
                  <a className="list-item" href="#"><li>Friends</li></a>
                  <a className="list-item" href="#"><li>Gift Codes</li></a>
                  <a className="list-item" href="#"><li>Settings</li></a>
                </ul>
              </li>

            </ul>
          </div>

        </div>
        <SessionsModalContainer/>
      </div>
    )
  }
}

export default NavBar;
