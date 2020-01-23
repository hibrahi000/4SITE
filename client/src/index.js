import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chart from './Anna/charts';
// import Anna from './Anna/anna';
// import Graphs from './Anna/graphs';
// import RenderLineChart from './Anna/graphs';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Anna />, document.getElementById('root'));
// ReactDOM.render(<Graphs />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
