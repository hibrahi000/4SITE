<<<<<<< HEAD
import React, { Component } from 'react';
||||||| merged common ancestors
import React from 'react';
import logo from './logo.svg';
=======
import React from 'react';
import logo from './Logo_01.png';
>>>>>>> da31704fcc4842dc9603bcb073947a2c4aab9838
import './App.css';
<<<<<<< HEAD
import Chart from './Anna/charts';

//note: this code renders with chart.js file as well
class App extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}

        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        //Ajax calls here
        this.setState({
            chartData: {
                labels: ['Amazon', 'Google', 'Microsoft', 
                'UPS', 'FeDex', 'Costco'],
                datasets: [
                    {
                        label: 'Population',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            
            }
        });
    }
    render() {
        return (
            <div className="App">
              <Chart chartData={this.state.chartData} location=" New York" legendPosition="bottom"/>
            </div>
          );
        }

    }
  
||||||| merged common ancestors

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
=======
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
>>>>>>> da31704fcc4842dc9603bcb073947a2c4aab9838

export default App;
