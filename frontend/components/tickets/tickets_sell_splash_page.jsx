import React from 'react';

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
    if(this.state.input.length > 1) {
      let result = [];
      for(let i = 0; i < this.props.events.length; i++) {
        result.push(<li>{this.props.events[i].name}</li>)
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
              <div>
                <ul>
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
