import React from 'react';
import { Link } from 'react-router-dom';

class SubCategoryList extends React.Component {
  constructor() {
    super();
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentWillReceiveProps(newProps) {
      if(this.props.categoryId !== newProps.categoryId) {
              this.props.fetchSubCategoryList(newProps.categoryId);
      }
  }

  componentDidMount() {
    // this.props.fetchSubCategoryList(this.props.categoryId);
  }

  renderHeader() {
    if(this.props.categoryId === 1) {
      return "Concert Tickets"
    } else if (this.props.categoryId === 2) {
      return "Sport Tickets"
    } else if (this.props.categoryId === 3) {
      return "Theater Tickets"
    }
  }

  render() {
    if(!this.props.subcategory_list) {
      return null
    }
    return(
      <div className="subcategory-list-container">
        <div className="subcategory-list-header">{this.renderHeader()}</div>
        {
          this.props.subcategory_list.map( subcategory => <span className="subcategory-item">
            <Link to={`/subcategory/${subcategory.id}`} params={{subcategoryId: subcategory.id}}>{subcategory.name}</Link>
          </span>)
        }
      </div>
    )
  }
}

export default SubCategoryList;
