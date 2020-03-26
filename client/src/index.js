import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Apex from './Anna/apex';
import PopChart from './Anna/Component/PopChart';
// import Chart from './Anna/charts';
// import Anna from './Anna/anna';
// import Graphs from './Anna/graphs';
// import RenderLineChart from './Anna/graphs';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import ContactPage from './ContactPage';
import HomePage from './Components/UserPages/HomePage/HomePage';

<<<<<<< HEAD

// ReactDOM.render(<Apex />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Anna />, document.getElementById('root'));
// ReactDOM.render(<Graphs />, document.getElementById('root'));

||||||| merged common ancestors
ReactDOM.render(<App />, document.getElementById('root'));
=======
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
>>>>>>> da31704fcc4842dc9603bcb073947a2c4aab9838

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
