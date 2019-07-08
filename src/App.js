import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tracker from './components/tracker';
import Display from './components/display';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 
			uid: '',
		};

	}

	fromInput(data) {
		this.setState({
			uid: data.uid
		});
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Route 
						exact
						path="/"
						render={() => (
							<Tracker
								uid={this.state.uid}
								updateUID={uid => this.fromInput(uid)}
							/>
						)}
					/>
					<Route
						path="/display"
						render={() => <Display uid={this.state.uid}/>}
					/>
				</Router>

			</div>
		);
	}
}


export default App;