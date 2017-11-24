import React from 'react';

class CategoryCard extends React.Component {
  constructor(props) {
    super(props)
    this.getEventsByCategory = this.getEventsByCategory.bind(this);
  }

  getEventsByCategory() {
    this.props.filterByCategory(this.props.id);
  }

  render() {
    let { icon, text, id } = this.props;

    return(
      <button onClick={this.getEventsByCategory} className="category-card-container">
        {icon()}
        <p>{text}</p>
      </button>
    )
  }
}

export default CategoryCard;
