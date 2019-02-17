import React from 'react';
import './city.css'

function City(props) {
    const name = props.name
    const weather = props.weather
    const degree = props.degree

    return (
        <li className="city">
            <p className="city__title">{name}</p>
            <p className="city__subtitle">{weather}</p>
            <p class="city__degree">{degree}</p>
        </li>
    )
}

export default City
