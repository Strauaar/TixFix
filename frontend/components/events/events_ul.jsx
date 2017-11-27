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
    if(childrenCount % 10 === 0 && childrenCount !== 0) {
      return <div>
        <button onClick={() =>
            this.loadMoreEvents(childrenCount, this.props.categoryId)} className="load-more-btn">
            Load More
          </button>
        </div>
    }
  }

  renderEventCards(children, start_index) {
    let result = [];
    for (let i = start_index; i < children.length; i+=3) {
      result.push(children[i]);
    }
    return result.map(EventCard => EventCard);
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
              this.renderEventCards(children, 0)
            }
          </div>
          <div className="col">
            {
              this.renderEventCards(children, 1)
            }
          </div>
          <div className="col">
            {
              this.renderEventCards(children, 2)
            }
          </div>
        </div>
        {this.renderLoadMoreButton(childrenCount)}
      </div>
    )
  }
}





export default EventsUl;
