import React from 'react';
// 
class CategoryCard extends React.Component {
  constructor(props) {
    super(props)

  }


  render() {
    let { icon, text } = this.props;

    return(
      <button className="category-card-container">
        {icon()}
        <p>{text}</p>
      </button>
    )
  }
}

export default CategoryCard;
