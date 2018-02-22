import React, {Component} from 'react';


class HotelsComp extends Component {

    render () {

        let hotels = this.props.hotels.slice();

        return (
            <div className="hotelsWrapper">
                { hotels.map((hotel, i) => {

                    return (

                        <div className="hotelDiv" key={i}>
                                <div className="imageDiv"></div>
                                <div className="hotelDesc">
                                    <ul>
                                        <li>{hotel.Name}</li>
                                        <li>{hotel.StarRating}</li>
                                        <li>{hotel.Facilities.map((fac,i)=>{
                                            return (<span>{fac[0].toUpperCase() + fac.slice(1)}  </span>)
                                        })}</li>
                                    </ul>
                                </div>
                        </div>
                    )
                })}
            
            </div>
        )
    }


}

export default HotelsComp;