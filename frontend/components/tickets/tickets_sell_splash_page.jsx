import React from 'react';
import moment from 'moment';

class TicketPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {input: ""}
    this.handleInput = this.handleInput.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.renderSearchList = this.renderSearchList.bind(this);
  }

  handleInput(e) {
    this.setState({input: e.target.value})
  }

  keyPress(e){
    if (e.keyCode == 13){
      this.props.fetchEvents({name: this.state.input})
    }
  }

  renderSearchList(){
    if(this.state.input.length >= 1) {
      let result = [];
      for(let i = 0; i < this.props.events.length; i++) {
        const month = moment(this.props.events[i].date).format('MMM');
        const day = moment(this.props.events[i].date).format('DD');
        const dayString = moment(this.props.events[i].date).format('ddd');
        const time = moment(this.props.events[i].date).format('h:MMa');
        result.push(<li><div className="search-list-item-container"><span className="search-event-name">{this.props.events[i].name}</span><div><span className="search-event-date">{time} {dayString} {month}, {day}</span></div></div></li>)
      }
      return result.map(li => li);
    }
  }

  render() {
    return (
      <div>
        <div className="sell-ticket-page-header">
          <div className="searchbar-top-block">
            <span className="sell-ticket-header-text">What are you selling?</span>
              <div className="searchbar-container sell-page-search">
                <input onKeyDown={this.keyPress} onChange={this.handleInput} className="searchbar" placeholder="Search for events...">
                </input>
                <span className="icon-container"><i className="fa fa-search search-icon fa-2x" aria-hidden="true"></i></span>
              </div>
              <div className="searchbar-list-container">
                <ul className="searchbar-ul">
                  {
                    this.renderSearchList()
                  }
                </ul>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TicketPage;
