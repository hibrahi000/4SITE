import React from 'react';
import logo from './Logo_01.png';
import './App.css';
import Navbar from './Components/UserPages/Navbar/NavBar';
import LoginPage from './LoginPage';
function App() {
  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <header className="App-header">
        <div className="missionFlex">
          <a href='/Home'>
          <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h3>
            Our team developed an application like an inhouse safety evaluator
            for any company such as Walmart.
          </h3>
        </div>
        <li>
          The application will have a login authentication the header will
          populate based of the company user, user-name and name attribute
          stored in the database
        </li>
        <li>
          There will also be data on safeguarding information such as encrypting
          from reputable sources. The scope of the application will start at the
          company then disseminate to all subordinates
        </li>
        <li>
          The Company scope will show the average of the company's
          safety/liability as an average and show data in a clean display
          utilizing a graphing API
        </li>
        <li>
          Then the store scope will show a list of all the stores in the company
        </li>
        <li>
          The third scope pertains to a similar list view but rather than the
          general safety data show it will show the maintenance data of each
          equipment used that has a potential to cause a safety concern if not
          checked up on periodically
        </li>
      </header>
    </div>
  );
}

export default App;
