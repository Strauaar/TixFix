import React from 'react';

class EventsUl extends React.Component {
  constructor(props){
    super(props)
    

  }

  render() {
    const childrenCount = React.Children.count(this.props.children);
    const children = React.Children.toArray(this.props.children);
    console.log(childrenCount);
    return (
      <div>
        <div className="event-list">
          {
            children.map(EventCardItemComponent => EventCardItemComponent)
          }
        </div>
        <div>
          <button className="load-more-btn">
            Load More
          </button>
        </div>
      </div>
    )
  }
}





export default EventsUl;
