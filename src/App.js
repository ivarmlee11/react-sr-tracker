import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tracker from './components/Tracker';
import Display from './components/Display';

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