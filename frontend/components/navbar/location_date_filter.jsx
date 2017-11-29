import React from 'react';
import { merge } from 'lodash';

class LocationDateFilter extends React.Component{
  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.renderDateSelect = this.renderDateSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {dateSelect: "Choose dates", locationSelect: "Select location", dateClicked: false, locationClicked: false}
  }

  componentWillReceiveProps(newProps) {
    if(this.props.categoryId !== newProps.categoryId){
    }
  }

  componentDidMount(){
    $("body").on.bind(this);
    $("body").on('click', (e) => {
      // console.log($(e.target).context.className);
      if ($(e.target).context.className === "city-search"){
      } else if($(e.target).context.className === "date-select") {
      } else {
        this.setState({dateClicked: false, locationClicked: false})
      }
    });
  }

  componentWillUnmount() {
    $("body").off('click', (e) => {
      // console.log($(e.target).context.className);
      if ($(e.target).context.className === "city-search"){
      } else if($(e.target).context.className === "date-select") {
      } else {
        this.setState({dateClicked: false, locationClicked: false})
      }
    });
  }

  filter(type) {
    console.log("IN FILTER");
    console.log(this.props);
    if(type === 'none'){
      this.setState({locationClicked: false, dateClicked: false,locationSelect: "Select location"})
      this.props.fetchEvents({categoryId: null, date: null, location: null})
    } else {
      this.setState({dateSelect: type})
      this.props.fetchEvents(merge({}, this.props.filter, {date: type}));
    }
  }

  changeLocation(e) {
    this.setState({locationSelect: e.target.value});
  }

  keyPress(e){
    if (e.keyCode == 13){
      this.setState({dateClicked: false, locationClicked: false})
      this.props.fetchEvents(merge({}, this.props.filter, {location: this.state.locationSelect}))
    }
  }

  handleClick(type) {
    if(type === 'date'){
      let newDateState = this.state.dateClicked === true ? false:true;
      this.setState({dateClicked: newDateState})
    }
    if(type === 'location') {
      let newLocationState = this.state.locationClicked === true ? false:true;
      this.setState({locationClicked: newLocationState})
    }

  }

  handlePropagation(e) {
    console.log("HANDLING");
    e.stopPropagation();
  }

  renderLocationSelect(){
    if(this.state.locationClicked){
      return <ul className="filter-dropdown" onClick={this.handlePropagation.bind(this)}>
        <li onClick={this.handlePropagation.bind(this)}><input className="city-search" onClick={this.handlePropagation.bind(this)} placeholder="Search by city" onChange={this.changeLocation} onKeyDown={this.keyPress}></input></li>
        <li><button className="city-search" onClick={() => this.filter('none')}>Clear Search</button></li>
      </ul>
    }
  }

  renderDateSelect(){
    if(this.state.dateClicked) {
      return <ul className="filter-dropdown">
        <li><button className="date-select">Choose dates</button></li>
        <li><button className="date-select" onClick={() => this.filter('Today')}>Today</button></li>
        <li><button className="date-select" onClick={() => this.filter('This weekend')}>This weekend</button></li>
        <li><button className="date-select" onClick={() => this.filter('This month')}>This month</button></li>
        <li><button className="date-select" onClick={() => this.filter('All dates')}>All dates</button></li>
      </ul>
    }
  }

  render() {
    return (
      <div className="filter-block">
        <ul className="navbar-date-location-filter-container">
          <li onClick={() => this.handleClick('location')}>
            <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>
              {this.state.locationSelect}<i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            {this.renderLocationSelect()}
          </li>
          <li onClick={() => this.handleClick('date')}>
            <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>
              {this.state.dateSelect}<i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
            {this.renderDateSelect()}
          </li>
        </ul>
      </div>
    )
  }
}




export default LocationDateFilter;
