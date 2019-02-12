import React, { Component } from 'react';

class App extends Component {
  state = {
    city: "",
    cityList: [],
  }

  handleCityChange = (event) => {
    const nextValue = event.target.value
    this.setState({ city: nextValue })
  }

  handleButtonClick = () => {
    const city = this.state.city
    const cityList = this.state.cityList

    this.setState({
      city: '',
      cityList: cityList.concat(city),
    })
  }

  render() {
    const city = this.state.city
    const cityList = this.state.cityList

    return (
      <div>
        <input name="city" value={city} onChange={this.handleCityChange} />
        <button onClick={this.handleButtonClick}>Add</button>

        <ul>
          {cityList.map(function (city) {
            return <li>{city}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
