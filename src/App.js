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

  sortByAscOrDesc = (value, hotels)  => {

    if (value === 'desc') {
        let descHotels = this.state.hotels.slice().sort((a, b) => {
            return b.StarRating - a.StarRating;
        })
        this.setState({
          hotels: descHotels
        })
    }

    if (value === 'asc') {
        let ascHotels = this.state.hotels.slice().sort((a, b) => {
            return a.StarRating - b.StarRating;
        });
        this.setState({
          hotels: ascHotels
        })
    }

}


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Filtering</h1>
        </header>
        <Filter hotels={this.state.hotels} filterHotels={this.filterHotels} sortByAscOrDesc={this.sortByAscOrDesc}/>
        <HotelsComp hotels={this.state.hotels}/>
      </div>  
    );
  }
}

export default App;
