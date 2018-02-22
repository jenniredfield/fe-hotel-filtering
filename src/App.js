import React, { Component } from 'react';
import hotels from './hotels';
import Filter from './Filter.js';
import HotelsComp from './HotelsComp.js';
import './App.css';

class App extends Component {

  state = {
    hotels : hotels,
  }

  //Need to add a filter component
  //Need to add a hotel display component

  render() {
    console.log(hotels)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Filtering</h1>
        </header>
        <Filter hotels={this.state.hotels}/>
        <HotelsComp/>
      </div>  
    );
  }
}

export default App;
