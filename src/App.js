import React, { Component } from 'react';
import hotels from './hotels'
import './App.css';

class App extends Component {

  state = {
    hotels : hotels,
  }

  render() {
    console.log(hotels)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Filtering</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
