import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Tracker from './components/Tracker';
import Display from './components/display';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
          <Router>
            <Route exact path="/" component={Tracker} />
            <Route path="/display" component={Display} />
          </Router>
      </div>
    );
  }
}

export default App;