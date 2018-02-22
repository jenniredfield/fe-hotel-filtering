import React, {Component} from 'react';


class Filter extends Component {


    //need to add select dropdown or checkbox for facilities filter

    handleChange = (event) => {
            console.log(event.target.value)
            this.props.filterHotels(event.target.value);
    }

    handleSort = (event) => {
        console.log(event.target.value)
        this.props.sortByAscOrDesc();
    }

    render () {

        let hotels = this.props.hotels.slice() //copy of props

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
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>
        )
    }


}

export default Filter;