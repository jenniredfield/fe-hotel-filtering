import React, {Component} from 'react';
import hotels from './hotels'

class Filter extends Component {


    //need to add select dropdown or checkbox for facilities filter

    handleChange = (event) => {
         
            this.props.filterHotels(event.target.value);
    }

    handleSort = (event) => {
      
        if(event.target.value === "") return;
        this.props.sortByAscOrDesc(event.target.value);
    }

    render () {

       

        let facilities = [];

        hotels.map((hotel,i)=> {
                hotel.Facilities.forEach(fac =>{
                    if(!facilities.includes(fac)){
                        facilities.push(fac)
                    }
                });
        });//pushes to facilities unique facilities


        return (
            <div className="filterWrapper">
                <button onClick={this.props.showAll}>SHOW ALL</button>
                <div className="checkBoxDiv">
                        <ul>
                        {facilities.map((fac,i)=>{
                            return (
                                <li key={i}><input value={fac} type="checkbox" onChange={this.handleChange}/>{fac[0].toUpperCase() + fac.slice(1)}</li>
                            )
                        })}
                        </ul>
                </div>
                <div className="sortByDiv">
                    <span>Sort by Rating: </span>
                    <select  onChange={this.handleSort}>
                    <option value="">Select...</option>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>
        )
    }


}

export default Filter;