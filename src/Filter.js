import React, {Component} from 'react';
import hotels from './hotels'
import CheckBox from './checkBox';

class Filter extends Component {

    state = {
        filterOff : false,
    }

    handleChange = (event) => {

            this.props.filterHotels(event.target.value);

        
    }

    handleSort = (event) => {
      
        if(event.target.value === "") return;
        this.props.sortByAscOrDesc(event.target.value);
    }

    handleButton = () => {

        // document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
        if(!this.state.filterOff){

            this.setState({
                filterOff: true,
            })

        } else {
            this.setState({
                filterOff: false,
            })
        }
        this.props.showAll();
    }

    handleFilterOff = () => {
        this.setState({
            filterOff: false,
        })
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
                {/* <div className="checkBoxDiv">
                        <ul>
                        {facilities.map((fac,i)=>{
                            return (
                                <li key={i}><input value={fac} type="checkbox" onChange={this.handleChange}/>{fac[0].toUpperCase() + fac.slice(1)}</li>
                            )
                        })}
                        </ul>
                </div> */}
                <div className="checkBoxDiv">
                        <ul>
                        {facilities.map((fac,i)=>{
                            return (
                                <CheckBox value={fac} fac={fac} handleChange={this.handleChange} filterOff={this.state.filterOff} handleFilterOff={this.handleFilterOff}/>
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