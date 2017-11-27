import React from 'react';

class CategoryCard extends React.Component {
  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this);
  }

  buttonClass(){
    console.log(this.props.selected);
    if(this.props.selected) {
      return "category-card-container category-btn-selected"
    } else {
      return "category-card-container"
    }
  }

  filter(id) {
    if(id === null) {
      this.props.fetchEvents();
    } else {
      
      this.props.filterByCategory(id);
    }
  }

  render() {
    let { icon, text, id } = this.props;

    return(
      <button onClick={() => this.filter(id)} className={this.buttonClass()}>
        {icon()}
        <p>{text}</p>
      </button>
    )
  }
}

export default CategoryCard;
