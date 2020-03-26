import React from 'react';
import logo from './Logo_01.png';
import './App.css';
import Login from './Components/Login/Login';
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Login />
    </div>
  );
}

export default App;
