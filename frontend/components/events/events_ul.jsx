import React from 'react';

class EventsUl extends React.Component {
  constructor(props){
    super(props)
  }

  loadMoreEvents(childrenCount, categoryId) {
    if(categoryId === undefined) {
      this.props.fetchMoreEvents(childrenCount);
    } else {
      this.props.fetchMoreEventsByCategory(childrenCount, this.props.categoryId)

    }
  }

  renderLoadMoreButton(childrenCount) {
    if(childrenCount % 10 === 0) {
      return <div>
        <button onClick={() =>
            this.loadMoreEvents(childrenCount, this.props.categoryId)} className="load-more-btn">
            Load More
          </button>
        </div>
    }
  }
  render() {
    console.log(this.props);
    const childrenCount = React.Children.count(this.props.children);
    const children = React.Children.toArray(this.props.children);

    return (
      <div>
        <div className="event-list">
          <div className="col">
            {
              children.map((EventCardItemComponent, i) => {
                if ( ((3*i) % i === 0) || i === 0 ) {
                  return EventCardItemComponent;
                }
              })
            }
          </div>
          <div className="col">
            {
              children.map((EventCardItemComponent, i) => {
                if ( ((3*i + 1) % i === (i-1)) || i === 1 ){
                  return EventCardItemComponent;
                }
              })
            }
          </div>
          <div className="col">
            {
              children.map((EventCardItemComponent, i) => {
                if ( ((3*i + 2) % (i+1) === i) || i === 2 ){
                  return EventCardItemComponent;
                }
              })
            }
          </div>
        </div>
        {this.renderLoadMoreButton(childrenCount)}
      </div>
    )
  }
}





export default EventsUl;
