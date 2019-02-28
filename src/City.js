import React from 'react';
import './city.css'

function City(props) {
    const { name, weather, degree } = props

    return (
        <li className="city">
            <p className="city__title">{name}</p>
            <p className="city__subtitle">{weather}</p>
            <p className="city__degree">{degree}</p>
        </li>
    )
}

export default City
