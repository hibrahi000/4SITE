import React, { Component } from 'react';
import './App.css';
import PopChart from './Component/PopChart';
// import PieChart from './Component/PieChart';



class Apex extends Component {

    render() {
        return (
            <div className="container">
              <PopChart />
              {/* <PieChart /> */}
            </div>
          );
        }

    }
  

export default Apex;
