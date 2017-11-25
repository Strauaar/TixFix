import React from 'react';

class CategoryCard extends React.Component {
  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this);
  }

  filter(id) {
    if(id === null) {
      this.props.fetchEvents(2);
    } else {
      this.props.filterByCategory(id);
    }
  }

  render() {
    let { icon, text, id } = this.props;

    return(
      <button onClick={() => this.filter(id)} className="category-card-container">
        {icon()}
        <p>{text}</p>
      </button>
    )
  }
}

export default CategoryCard;
