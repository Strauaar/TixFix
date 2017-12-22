import React from 'react';
import moment from 'moment';
import { merge } from 'lodash';


class SellTicketPage extends React.Component {
  constructor(props) {
    super(props);
    this.createTicket = this.createTicket.bind(this);
    this.update = this.update.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
    this.state = {price: 0, row: '-', type_of: "GA", num_tickets:0 , errors: null}
  }
  componentWillMount(){
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  update(type, e) {
    if(type === 'section') {
      this.setState({type_of: e.target.value})
    } else if (type === 'row') {
      this.setState({row: e.target.value})
    } else if (type === 'num_tickets') {
      this.setState({num_tickets: e.target.value})
    } else if (type === 'price') {
      this.setState({price: e.target.value})
    }
  }

  createTicket(event_id, seller) {
    if (seller === null) {
      this.props.addRedirect(this.props.location.pathname)
      this.props.history.push("/session")
    } else {
      let params = merge({}, this.state, { event_id, seller_id: seller.id });
      $.ajax({
        method: 'POST',
        url: `api/tickets`,
        data: params
      }).then(res => this.props.history.push("/myhub"))
    }
  }

  renderResponse() {

  }

  render() {
    if (this.props.eventQ === undefined) {
      return null
    } else {
      const month = moment(this.props.eventQ.date).format('MMM');
      const day = moment(this.props.eventQ.date).format('DD');
      const dayString = moment(this.props.eventQ.date).format('ddd');
      const time = moment(this.props.eventQ.date).format('h:MMa');
      return (
        <div>
          <div className="top-text-container">
            <div className="sell-ticket-top-ext">
              <span>
                {this.props.eventQ.name} Tickets
              </span>
              <div className="header-city-details">
                <span>{this.props.venue_name} |</span>
                <span> {this.props.city}</span>
              </div>
            </div>
          </div>
          <div className="sell-ticket-whole-container">
            <div className="sell-ticket-block">
              <div className="sell-ticket-header"> <span>FILL US IN ON YOUR TICKETS</span></div>

              <div className="card-detail-container subcategory-card-detail-container ticket-sale">
                <div className="card-detail-date-block">
                  <span className="card-detail-day">{dayString}
                  </span>
                  <span className="card-detail-date">
                    {month} {day}
                  </span>
                </div>
                <div className="card-detail-event-block subcategory-event-detail-block">
                  <p className="card-detail-event-name">{this.props.name}</p>
                  <span className="card-detail-date-venue">{time}  at {this.props.venue_name}, {this.props.city}, {this.props.state}</span>
                </div>
              </div>
              <div className="form-container">
                  <div className="num-tickets-container">
                    <span>HOW MANY TICKETS DO YOU HAVE?</span>
                    <div className="num-tickets-selector">
                      <select onChange={(e) => this.update('num_tickets',e)} class="ticket-qty">
                        <option value="1">1 Ticket</option>
                        <option value="2">2 Tickets</option>
                        <option value="3">3 Tickets</option>
                        <option value="4">4 Tickets</option>
                        <option value="5">5 Tickets</option>
                        <option value="6">6 Tickets</option>
                        <option value="7">7 Tickets</option>
                        <option value="8">8 Tickets</option>
                        <option value="9">9 Tickets</option>
                        <option value="10">10 Tickets</option>
                      </select>
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
                      <input onChange={(e) => this.update('section',e)}></input>
                    </div>
                    <div className="seat-input-block">
                      <span>ROW</span>
                      <input onChange={(e) => this.update('row',e)}></input>
                    </div>
                  </div>
                </div>
                <div className="price-container">
                  <div><strong className="dollar-sign">$</strong><input type="number" onChange={(e)=>this.update('price',e)} className="price-input"></input></div>
                  <span>price per ticket</span>
                </div>
              </div>
              <div>
                {
                  this.renderResponse()
                }
              </div>
              <div className="post-ticket-btn-container">
                <button onClick={() => this.createTicket(this.props.eventQ.id, this.props.currentUser)}className="post-ticket-btn">Post my tickets</button>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
}

export default SellTicketPage;
