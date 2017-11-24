import React from 'react';

class CategoryCard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let { icon, text, id, filterByCategory } = this.props;

    return(
      <button onClick={() => filterByCategory(id)} className="category-card-container">
        {icon()}
        <p>{text}</p>
      </button>
    )
  }
}

export default CategoryCard;
