import React from 'react';
import NavBarMiscHelp from './navbar/navbar_misc_menu_items';
import UserMenuItems from './navbar/navbar_user_menu_items';
import SessionsModalContainer from './sessions_modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    
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

            <NavBarMiscHelp />
            <UserMenuItems />

          </div>

        </div>
        <SessionsModalContainer/>
      </div>
    )
  }
}

export default NavBar;
