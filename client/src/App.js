import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/UserPages/Navbar/NavBar';
import LoginPage from './LoginPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
