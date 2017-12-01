import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ""}
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e){
    if(e.keyCode === 13) {
    
    }
    this.setState({input: e.target.value})
  }

  render() {

    return(
      <div className="searchbar-block">
        <div className="searchbar-container">
          <input onKeyUp={this.keyPress} className="searchbar" placeholder="Search for events...">
          </input>
          <span className="icon-container"><i className="fa fa-search search-icon fa-2x" aria-hidden="true"></i></span>
        </div>
      </div>
    )
  }
}

export default Searchbar;
