import React from 'react';
const HotelDisplayBox = ({onClick, hotel}) => {

    return (
        <div className='box' onClick={onClick}>
                    <div className='label-inside-box'>Name: { hotel.name} </div>
                    <div className='label-inside-box'>Location:  {hotel.location}</div>
                    <div className='label-inside-box'>Contact: {hotel.contact}</div>
        </div>
    );
}

export default HotelDisplayBox;
