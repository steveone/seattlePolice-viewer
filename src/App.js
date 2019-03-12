import React, { Component } from 'react';
import './App.css';
import Display from './components/display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Seattle 911 Police View - Alpha<br/></h1>
          Data from: https://data.seattle.gov/resource/pdem-r2ku.json
        </header>
        <Display/>
      </div>
    );
  }
}

export default App;
