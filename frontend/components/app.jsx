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

const App = () => (
  <div>
    <div className="nav-bar-background"></div>
    <NavBarContainer></NavBarContainer>
    <CategoryCardList/>
  </div>
);

export default App;
