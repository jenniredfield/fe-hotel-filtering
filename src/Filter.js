import React, {Component} from 'react';
import hotels from './hotels'
import CheckBox from './checkBox';

class Filter extends Component {

    state = {
        filterOff : false,
    }

    handleChange = (value) => {
       
        this.props.filterHotels(value)
                   
    }

    handleSort = (event) => {
      
        if(event.target.value === "") return;
        this.props.sortByAscOrDesc(event.target.value);
    }

    handleButton = () => {

        if(!this.state.filterOff){

            this.setState({
                filterOff: !this.state.filterOff,
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
                <div className="checkBoxDiv">
                        <ul>
                        {facilities.map((fac,i)=>{
                            return (
                                <CheckBox value={fac} fac={fac} handleChange={this.handleChange} filterOff={this.state.filterOff} handleFilterOff={this.handleFilterOff} key={i}/>
                            )
                        })}
                        </ul>
                </div>
                <div className="sortByDiv">
                    <span>Sort by Rating: </span>
                    <select  onChange={this.handleSort}>
                        <option value="0">Select...</option>
                        <option value="1">Descending</option>
                        <option value="-1">Ascending</option>
                    </select>
                </div>
            </div>
        )
    }

}

export default Filter;