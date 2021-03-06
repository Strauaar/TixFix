import React from 'react';
import CategoryCardContainer from './category_card_container';

class CategoryCardList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="category-list-container">
        <CategoryCardContainer id={null} icon={() => (<i className="fa-2x fa fa-home" aria-hidden="true"></i>)} text="All Events"></CategoryCardContainer>

        <CategoryCardContainer id={2} icon={() => (<i className="fa-2x fa fa-futbol-o" aria-hidden="true"></i>)} text="Sports"></CategoryCardContainer>

        <CategoryCardContainer id={1} icon={() => <i className="fa-2x fa fa-microphone" aria-hidden="true"></i>} text="Concerts"></CategoryCardContainer>

        <CategoryCardContainer id={3} icon={() => (<i className="fa-2x fa fa-smile-o" aria-hidden="true"></i>)} text="Theater &amp; Comedy"></CategoryCardContainer>
      </div>
    )
  }
};

export default CategoryCardList;
