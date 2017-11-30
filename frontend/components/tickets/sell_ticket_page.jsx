import React from 'react';


class SellTicketPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sell-ticket-whole-container">
        <div className="sell-ticket-block">
          <div className="sell-ticket-header"> <span>FILL US IN ON YOUR TICKETS</span></div>
          <div className="form-container">
            <div className="num-tickets-container">
              <span>HOW MANY TICKETS DO YOU HAVE?</span>
              <div className="num-tickets-selector">
                DROPDOWN
              </div>
            </div>
            <div className="seats-container">
              <div className="seats-header-container">
                <span></span>
                <span className="seats-text">WHERE ARE YOUR SEATS?</span>
              </div>
              <div className="section-row-input-block">
                <div className="seat-input-block">
                  <span>SECTION</span>
                  <input></input>
                </div>
                <div className="seat-input-block">
                  <span>ROW</span>
                  <input></input>
                </div>
              </div>
            </div>
          </div>
          <div className="post-ticket-btn-container">
            <button className="post-ticket-btn">Post my tickets</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SellTicketPage;
