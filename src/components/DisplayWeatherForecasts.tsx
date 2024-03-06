import { useState } from 'react'
import axios from 'axios'
import { WeatherContainer } from './display.weather.module'
import WeatherAppLogo from '../img/weather-app-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { WiHumidity } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'
import WeatherDataProps from '../interfaces/WeatherDataProps'

const DisplayWeatherForecasts = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null)
  const api_key = '41c11b042df6d8b40a8774324e646475'
  const api_Endpoint = 'https://api.openweathermap.org/data/2.5/'

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
      // Handle error gracefully, show a message to the user, etc.
    }
  }

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchData()
    } else {
      // Handle empty city input, show a message to the user, etc.
    }
  }

  return (
    <WeatherContainer>
      <div className="container">
        <img
          src={WeatherAppLogo}
          alt="Weather App Logo"
          className="weatherLogo"
        />
        <div className="weatherSearchArea">
          <input
            type="text"
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="weatherSearchCircle" onClick={handleSearch}>
            <AiOutlineSearch className="weatherSearchIcon" />
          </div>
        </div>

        {weatherData && (
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">{/* Render weather icon */}</div>
              <h1>{weatherData.main.temp}°C</h1>
              <h2>{weatherData.weather[0].description}</h2>
            </div>
            <div className="lowerWeatherInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="weatherIcon" />
                <div className="weatherInfo">
                  <h1>{weatherData.main.humidity}%</h1>
                  <p>Current Humidity: </p>
                </div>
              </div>
              <div className="windSection">
                <SiWindicss className="weatherIcon" />
                <div className="weatherInfo">
                  <h1>{weatherData.wind.speed}km/h</h1>
                  <p>Wind Speed: </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </WeatherContainer>
  )
}

export default DisplayWeatherForecasts
