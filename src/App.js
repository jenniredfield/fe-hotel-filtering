import React, { Component } from 'react';
import hotels from './hotels';
import Filter from './Filter.js';
import HotelsComp from './HotelsComp.js';
import myFilter from './helpers/functions.js'
import './App.css';

class App extends Component {

  state = {
    hotels,
    filter: [],
    sort: 0,
  }

  filterHotels = (facility) => {
  
  let hotelFilter = [];

  if(!this.state.filter.includes(facility)){
    hotelFilter = [...this.state.filter, facility];
  } else {
    hotelFilter = this.state.filter.filter(fac => {
      return fac !== facility;
    })
  }


    this.setState({
        filter : hotelFilter
    })

  }

  
  sortByAscOrDesc = (value) => {

    console.log(value)
    this.setState({
      sort: +value,
    })

  }
  
  

  showAll = () => {

    this.setState({
      filter : [],
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Filtering</h1>
        </header>
           <div className="wrapper">
            <Filter hotels={this.state.hotels} filterHotels={this.filterHotels} sortByAscOrDesc={this.sortByAscOrDesc} showAll={this.showAll}/>
            <div className="hotelsWrapper">
            {this.state.hotels
            .filter(hotel => myFilter(this.state.filter, hotel))
            .sort((a,b) => this.state.sort * (a.StarRating - b.StarRating))
            .map((hotel, i)=>{
              return <HotelsComp hotel={hotel} key={i}/>
            })
            }
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
