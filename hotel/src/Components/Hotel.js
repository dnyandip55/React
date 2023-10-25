import React from 'react';
import './Hotel.css';

function Hotel(props){
return(
    <div>
        <li>
      <h1>{props.hotel.name}</h1> Location- <b>{props.hotel.location}</b>
    </li>
    </div>
)
}
export default Hotel;