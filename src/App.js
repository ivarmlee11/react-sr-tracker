import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tracker from './components/tracker';
import Display from './components/display';

class App extends React.Component {
	render() {
		let uniqueName = process.env.REACT_APP_OW_ID
		return (
			<div className="App">
				<Router>
					<Route 
						exact
						path="/"
						render={() => (
							<Tracker name={uniqueName}/>
						)}
					/>
					<Route
						path="/display"
						render={() => <Display name={uniqueName}/>}
					/>
				</Router>

			</div>
		);
	}
}


export default App;