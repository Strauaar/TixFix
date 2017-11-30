


import React from 'react';

class UserHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="myhub-home-container">
        <div className="myhub-home-block">
          <div className="myhub-whats-next home-block">
            <div className="header-block">
              <span>WHAT'S NEXT</span>
            </div>
          </div>
          <div className="myhub-listings home-block">
            <div className="header-block">
              <span>LISTINGS</span>
            </div>

          </div>
          <div className="myhub-sales-payments-container">
            <div className="myhub-sales-block home-block">
              <div className="header-block">
                <span>SALES</span>
              </div>

            </div>
            <div className="myhub-payments-block home-block">
              <div className="header-block">
                <span>PAYMENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserHome;
