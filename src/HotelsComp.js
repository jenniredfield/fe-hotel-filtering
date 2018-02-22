import React, {Component} from 'react';


class HotelsComp extends Component {

    render () {

        let hotels = this.props.hotels.slice();

        return (
            <div className="hotelsWrapper">
                { hotels.map((hotel, i) => {

                    return (

                        <div className="hotelDiv" key={i}>
                                <div className="imageDiv">
                                    <img src={hotel.url} alt="hotel" style={{width: "200px"}}/>
                                </div>
                                <div className="hotelDesc">
                                    <ul>
                                        <li><h2>{hotel.Name}</h2></li>
                                        <li><span className="rating">{hotel.StarRating}</span></li>
                                        <li>{hotel.Facilities.map((fac,i)=>{
                                            return (<span key={i} className="facs">{fac[0].toUpperCase() + fac.slice(1)}  </span>)
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