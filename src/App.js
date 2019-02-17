import React, { Component } from 'react';
import City from './City'

class App extends Component {
  state = {
    city: "",
    cityList: ['London', 'Prague'],
  }

  handleCityChange = (event) => {
    const nextValue = event.target.value
    this.setState({ city: nextValue })
  }

  handleButtonClick = () => {
    const { city, cityList } = this.state

    this.setState({
      city: '',
      cityList: cityList.concat(city),
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
            return <City name={city} weather="Sunny" degree={22} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
