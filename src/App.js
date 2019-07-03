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
			uid: data.uid,
		});
		// state is change by Tracker component (child of App)
	}
	render() {
		return (
			<div className="App">
				<Router>
					<Route 
						exact path="/"
						render={() => <Tracker callback={this.fromInput.bind(this)}/>}
					/>
					{/* prop is not updated here */}
					<Route
						path="/display"
						render={() => <Display uid={this.state.uid}/>}
					/>
				</Router>
				{/* prop is updated here and reflected in the component but i want this component in a route */}
				{/* <Display uid={this.state.uid}/> */}
			</div>
		);
	}
}

export default App;