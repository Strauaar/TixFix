import React from 'react';
import { merge } from 'lodash';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""}
    this.keyPress = this.keyPress.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
  }

  fetchEvents() {
    this.props.fetchSearchEvents(merge({}, this.props.filter, {name: this.state.input}))
  }

  keyPress(e){
    if(e.keyCode === 13) {
      this.fetchEvents();
    }
    this.setState({input: e.target.value})
  }

  render() {

    return(
      <div className="searchbar-block">
        <div className="searchbar-container">
          <input onKeyUp={this.keyPress} className="searchbar" placeholder="Search for events...">
          </input>
          <span onClick={this.fetchEvents} className="icon-container"><i className="fa fa-search search-icon fa-2x" aria-hidden="true"></i></span>
        </div>
      </div>
    )
  }
}

export default Searchbar;
