import React from 'react';

class EventsUl extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props);
    const childrenCount = React.Children.count(this.props.children);
    const children = React.Children.toArray(this.props.children);
    
    return (
      <div>
        <div className="event-list">
          {
            children.map(EventCardItemComponent => EventCardItemComponent)
          }
        </div>
        <div>
          <button onClick={() => this.props.fetchMoreEvents(childrenCount)} className="load-more-btn">
            Load More
          </button>
        </div>
      </div>
    )
  }
}





export default EventsUl;
