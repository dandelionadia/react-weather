import React, { Component } from 'react';
import City from './City'

class App extends Component {
  state = {
    city: "London",
    cityList: [],
  }

  handleCityChange = (event) => {
    const nextValue = event.target.value
    this.setState({ city: nextValue })
  }

  handleButtonClick = () => {
    const { city, cityList } = this.state

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=87b3e5827f5452c0ba3b3f34065d9c42`)
      .then(function (res) {
        return res.json()
      })
      .then((data) => {
        console.log(data)

        this.setState({
          city: '',
          cityList: cityList.concat({
            name: data.name,
            weather: data.weather[0].main,
            degree: data.main.temp,
            id: data.id
          }),
        })
      })
  }

  render() {
    const { city, cityList } = this.state

    return (
      <div>
        <input name="city" value={city} onChange={this.handleCityChange} />
        <button onClick={this.handleButtonClick}>Add</button>

        <ul>
          {cityList.map(function (city) {
            return <City key={city.id} name={city.name} weather={city.weather} degree={city.degree} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
