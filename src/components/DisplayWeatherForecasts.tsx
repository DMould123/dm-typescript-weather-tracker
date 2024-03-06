import { useState } from 'react'
import axios from 'axios'
import { WeatherContainer } from './display.weather.module'
import WeatherAppLogo from '../img/weather-app-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { WiHumidity } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa'
import WeatherDataProps from '../interfaces/WeatherDataProps'

const DisplayWeatherForecasts = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null)
  const apiKey = '41c11b042df6d8b40a8774324e646475'
  const apiEndpoint = 'https://api.openweathermap.org/data/2.5/'

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchData()
    } else {
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
              <div className="icon">icon</div>
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
              {/* New addition */}
              <div className="temperatureSection">
                <FaTemperatureLow className="weatherIcon" />
                <div className="weatherInfo">
                  <h1>{weatherData.main.temp_min}°C</h1>
                  <p>Min Temperature: </p>
                </div>
              </div>
              <div className="temperatureSection">
                <FaTemperatureHigh className="weatherIcon" />
                <div className="weatherInfo">
                  <h1>{weatherData.main.temp_max}°C</h1>
                  <p>Max Temperature: </p>
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
