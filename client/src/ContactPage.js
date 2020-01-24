import React from 'react';
import logo from './Logo_01.png';
import './App.css';
import ContactForm from './Components/UserPages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <a href="/home">
        <img src={logo} className="App-logo" alt="logo" />
      </a>

      <ContactForm />
    </div>
  );
}

export default App;
