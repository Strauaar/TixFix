import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBar from './navbar.jsx';

const App = () => (
  <div>
    <div className="nav-bar-background"></div>
    <NavBar></NavBar>

  </div>
);

export default App;
