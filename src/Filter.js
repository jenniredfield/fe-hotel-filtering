import React, {Component} from 'react';


class Filter extends Component {


    //need to add select dropdown or checkbox for facilities filter

    render () {

        let hotels = this.props.hotels.slice() //copy of props

        let facilities = [];

        hotels.map((hotel,i)=> {
                hotel.Facilities.forEach(fac =>{
                    if(!facilities.includes(fac)){
                        facilities.push(fac)
                    }
                });
        });


        return (
            <div className="filterWrapper">
                <div className="checkBoxDiv">
                        <ul>
                        {facilities.map((fac,i)=>{
                            return (
                                <li><input value={fac} type="checkbox"/>{fac[0].toUpperCase() + fac.slice(1)}</li>
                            )
                        })}
                        </ul>
                </div>
            </div>
        )
    }


}

export default Filter;