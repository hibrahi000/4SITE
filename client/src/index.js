import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import ContactPage from './ContactPage';
import HomePage from './Components/UserPages/HomePage/HomePage';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/contact" component={ContactPage} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
