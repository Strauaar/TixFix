import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import CategoryCardList from './categories/category_card_list';
import EventsListContainer from './events/events_list_container';
import EventShowPageContainer from './events/event_show_page_container';
import CFooter from './footer/footer';

const renderCategoryList = (categoryId) => {
  return <div>hi</div>
}

const App = ({categoryId}) => (
  <div>
    <div className="nav-bar-background"></div>
    <NavBarContainer></NavBarContainer>
    <Route path="/events/:eventId" component={EventShowPageContainer} />
    <Route exact path="/"component={CategoryCardList}/>
    <Route exact path="/" component={EventsListContainer}/>
    {renderCategoryList(categoryId)}
    <Route exact path="/" component={CFooter}/>
  </div>
);

export default App;
