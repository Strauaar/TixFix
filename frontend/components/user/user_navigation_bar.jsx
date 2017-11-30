import React from 'react';

const UserNavBar = (props) => {


  return(
    <div className="myhub-nav-container">
      <div className="myhub-nav-block">
        <div className="myhub-pathname">LINK NAME</div>
        <div className="myhub-list-container">
          <ul className="myhub-ul">
            {
              props.children.map(navlink => (
                  <li className="myhub-list-item">{navlink}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
};

export default UserNavBar;
