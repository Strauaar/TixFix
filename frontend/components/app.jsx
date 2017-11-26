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
const App = () => (
  <div>
    <div className="nav-bar-background"></div>
    <NavBarContainer></NavBarContainer>
    <Route exact path="/"component={CategoryCardList}/>
    <Route exact path="/" component={EventsListContainer}/>
    <Route path="/events/:eventId" component={EventShowPageContainer} />
  </div>
);

export default App;
