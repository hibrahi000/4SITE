import React, { Component } from 'react';

import Navbar from '../Navbar/NavBar';
import Tabs from './Tabs';
import VerticalTabs from '../MaterialTabs/VerticalTab/VerticalTabs';
import VerticalTabs2 from '../MaterialTabs/VerticalTab/VerticalTabs2';
import VerticalTabs3 from '../MaterialTabs/VerticalTab/VerticalTabs3';
import CenteredTabs from '../MaterialTabs/CenteredTabs';
require('./styles.css');

class HomePage extends Component {
	state = {
		value: 0
	};

	handleChange = (value) => {
		this.setState({ value });
	};

	handleView = (value) => {
		switch (value) {
			case 2:
				return <VerticalTabs3 label={[ 'Machine1', 'Machine2', 'Machine3' ]} />;
			case 1:
				return <VerticalTabs2 label={[ 'store1', 'store2', 'store3' ]} />;
			default:
				return <VerticalTabs label={[ 'overall', 'finances', 'resources' ]} />;
		}
	};

	render() {
		const value = this.state.value;
		console.log(value);
		const Tabs = this.handleView(value);

		return (
			<div>
				<Navbar />
				<CenteredTabs
					handleChange={this.handleChange}
					label={[ 'Company Overall', 'Stores Status', 'Maintenance' ]}
				/>
				<header className="App-header">{Tabs}</header>
			</div>
		);
	}
}

export default HomePage;

// <div className="Tabs">
//             <Tabs>
//               <div label="One">
//                 <header className="App-header2">
//                   <VerticalTabs>
//                     <div label="Overall">adsds</div>
//                     <div label="Finances">
//                       After 'while, <em>Crocodile</em>!
//                     </div>
//                     <div label="Resources">
//                       Nothing to see here, this tab is <em>extinct</em>!
//                     </div>
//                   </VerticalTabs>
//                 </header>
//               </div>

//               <div label="Two">
//                 <header className="App-header2">
//                   <VerticalTabs>
//                     <div label="Store1">adsds</div>
//                     <div label="Store2">
//                       After 'while, <em>Crocodile</em>!
//                     </div>
//                     <div label="Store3">
//                       Nothing to see here, this tab is <em>extinct</em>!
//                     </div>
//                   </VerticalTabs>
//                 </header>
//               </div>
//               <div label="Three">
//                 <header className="App-header2">
//                   <VerticalTabs>
//                     <div label="Machine1">adsds</div>
//                     <div label="Machine2">
//                       After 'while, <em>Crocodile</em>!
//                     </div>
//                     <div label="Machine3">
//                       Nothing to see here, this tab is <em>extinct</em>!
//                     </div>
//                   </VerticalTabs>
//                 </header>
//               </div>
//             </Tabs>
//           </div>
