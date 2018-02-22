import React, {Component} from 'react';


class Filter extends Component {


    //need to add select dropdown or checkbox for facilities filter

    render () {

        let hotels = this.props.hotels.slice() //copy of props
        console.log(hotels)
        let facilities = [];

        hotels.map((hotel,i)=> {
                hotel.Facilities.forEach(fac =>{
                    if(!facilities.includes(fac)){
                        facilities.push(fac)
                    }
                });
        });
        console.log(facilities);

        return (
            <div className="filterWrapper">
            
            </div>
        )
    }


}

export default Filter;