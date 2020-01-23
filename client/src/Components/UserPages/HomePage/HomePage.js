import React, { Component } from 'react';

import Navbar from '../Navbar/NavBar';
import Tabs from './Tabs';
import VerticalTabs from './VerticalTabs/VerticalTabs';

require('./styles.css');

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="Tabs">
            <Tabs>
              <div label="One">
                <header className="App-header2">
                  <VerticalTabs>
                    <div label="Overall">adsds</div>
                    <div label="Finances">
                      After 'while, <em>Crocodile</em>!
                    </div>
                    <div label="Resources">
                      Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                  </VerticalTabs>
                </header>
              </div>

              <div label="Two">
                <header className="App-header2">
                  <VerticalTabs>
                    <div label="Store1">adsds</div>
                    <div label="Store2">
                      After 'while, <em>Crocodile</em>!
                    </div>
                    <div label="Store3">
                      Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                  </VerticalTabs>
                </header>
              </div>
              <div label="Three">
                <header className="App-header2">
                  <VerticalTabs>
                    <div label="Machine1">adsds</div>
                    <div label="Machine2">
                      After 'while, <em>Crocodile</em>!
                    </div>
                    <div label="Machine3">
                      Nothing to see here, this tab is <em>extinct</em>!
                    </div>
                  </VerticalTabs>
                </header>
              </div>
            </Tabs>
          </div>
        </header>
      </div>
    );
  }
}

export default HomePage;
