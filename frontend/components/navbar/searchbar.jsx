import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="searchbar-block">
        <div className="searchbar-container">
          <input className="searchbar" placeholder="Search for events, artists, teams, or venues">

          </input>
          <span className="icon-container"><i className="fa fa-search search-icon fa-2x" aria-hidden="true"></i></span>
        </div>
      </div>
    )
  }
}

export default Searchbar;
