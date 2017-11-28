import React from 'react';
import { merge } from 'lodash';

class LocationDateFilter extends React.Component{
  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this);
    this.state = {dateSelect: "Choose dates", locationSelect: "San Francisco, CA"}
  }

  componentWillReceiveProps(newProps) {
    if(this.props.categoryId !== newProps.categoryId){

    }
  }

  filter(type) {
    console.log("IN FILTER");
    console.log(this.props);
    this.setState({dateSelect: type})
    this.props.fetchEvents(merge({}, this.props.filter, {date: type}));
  }

  render() {
    return (
      <div className="filter-block">
        <ul className="navbar-date-location-filter-container">
          <li>
            <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>
              {this.state.locationSelect}<i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <ul className="filter-dropdown">
              <li><input placeholder="Search by city"></input></li>
            </ul>
          </li>
          <li>
            <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>
              {this.state.dateSelect}<i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            <ul className="filter-dropdown">
              <li><button>Choose dates</button></li>
              <li><button onClick={() => this.filter('Today')}>Today</button></li>
              <li><button onClick={() => this.filter('This weekend')}>This weekend</button></li>
              <li><button onClick={() => this.filter('This month')}>This month</button></li>
              <li><button onClick={() => this.filter('All dates')}>All dates</button></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}




export default LocationDateFilter;
