import React, {Component} from 'react';
import hotels from './hotels'
// import CheckBox from './checkBox';

class Filter extends Component {

    state = {
        checked : false,
    }

    handleChange = (event) => {

            this.props.filterHotels(event.target.value);

            this.setState({
                checked: true,
            })
    }

    handleSort = (event) => {
      
        if(event.target.value === "") return;
        this.props.sortByAscOrDesc(event.target.value);
    }

    handleButton = () => {

        document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
        this.props.showAll();
    }

    render () {
        let facilities = [];

        hotels.map((hotel,i)=> {
             return  hotel.Facilities.forEach(fac =>{
                    if(!facilities.includes(fac)){
                        facilities.push(fac)
                    }
                });
        });//pushes to facilities unique facilities

        return (
            <div className="filterWrapper">
                <button onClick={this.handleButton}>SHOW ALL</button>
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