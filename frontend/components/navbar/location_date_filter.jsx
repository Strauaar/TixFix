import React from 'react';

const LocationDateFilter = ({filterByDate, categoryId}) => {

  const filter = (type) => {
    console.log(categoryId);
    filterByDate({id: categoryId, filter_type: type});
  }

  return (
    <div className="filter-block">
      <ul className="navbar-date-location-filter-container">
        <li>
          <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i>
            San Francisco, CA<i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          <ul className="filter-dropdown">
            <li><input placeholder="Search by city"></input></li>
          </ul>
        </li>
        <li>
          <a href="#"><i className="fa fa-calendar" aria-hidden="true"></i>
            Choose dates<i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          <ul className="filter-dropdown">
            <li><button>Choose dates</button></li>
            <li><button onClick={() => filter('today')}>Today</button></li>
            <li><button>This weekend</button></li>
            <li><button>This month</button></li>
            <li><button>All dates</button></li>
          </ul>
        </li>
      </ul>
    </div>
  )
};

export default LocationDateFilter;
