import React, { Component } from 'react';
import hotels from './hotels';
import Filter from './Filter.js';
import HotelsComp from './HotelsComp.js';
import './App.css';

class App extends Component {

  state = {
    hotels : hotels,
  }

  filterHotels = (facility) => {

    let filteredHotels = hotels.filter(hotel => {
        return hotel.Facilities.includes(facility);
    })

    this.setState({
        hotels: filteredHotels
    })

  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Filtering</h1>
        </header>
        <Filter hotels={this.state.hotels} filterHotels={this.filterHotels}/>
        <HotelsComp hotels={this.state.hotels}/>
      </div>  
    );
  }
}

export default App;
