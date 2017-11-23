import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBar from './navbar/navbar';
import CategoryCardList from './categories/category_card_list';

const App = () => (
  <div>
    <div className="nav-bar-background"></div>
    <NavBar></NavBar>
    <CategoryCardList/>
  </div>
);

export default App;
