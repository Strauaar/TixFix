import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';

class CategoryCard extends React.Component {
  constructor(props) {
    super(props)
    this.filter = this.filter.bind(this);
  }

  buttonClass(){
    if(this.props.selected) {
      return "category-card-container category-btn-selected"
    } else {
      return "category-card-container"
    }
  }

  filter(id) {
    if(id === null) {
      this.props.history.push("/")
      this.props.fetchEvents(merge({}, this.props.filter, { categoryId: id }));
    } else {
      this.props.history.push(`/category/${id}`);
      this.props.fetchEvents(merge({}, this.props.filter, { categoryId: id }));
    }
  }

  disable() {
    if(this.props.selected) {
      return "disabled"
    } else {
      return ""
    }
  }

  render() {
    let { icon, text, id } = this.props;

    return(
      <button disabled={this.disable.apply(this)} onClick={() => this.filter(id)} className={this.buttonClass()}>
        {icon()}
        <p>{text}</p>
      </button>
    )
  }
}

export default CategoryCard;
