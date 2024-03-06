import { WeatherContainer } from './display.weather.module'
import WeatherAppLogo from '../img/weather-app-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { WiHumidity } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'

const DisplayWeatherForecasts = () => {
  return (
    <WeatherContainer>
      <div className="weather-container">
        <img
          src={WeatherAppLogo}
          alt="Weather App Logo"
          className="weatherLogo"
        />
        <div className="weatherSearchArea">
          <input type="text" placeholder="Enter a city" />
          <div className="weatherSearchCircle">
            <AiOutlineSearch className="weatherSearchIcon" />
          </div>
        </div>
        <div className="weatherArea">
          <h1>Stockholm</h1>
          <span>SWE</span>
          <div className="icon">icon</div>
          <h1>18c</h1>
          <h2>Rainy</h2>
        </div>
        <div className="lowerWeatherInfoArea">
          <div className="humidityLevel">
            <WiHumidity className="weatherIcon" />
            <div className="weatherInfo">
              <h1>50%</h1>
              <p>Current Humidity: </p>
            </div>
          </div>
          <div className="windSection">
            <SiWindicss className="weatherIcon" />
            <div className="weatherInfo">
              <h1>1.68km/h</h1>
              <p>Wind Speed: </p>
            </div>
          </div>
        </div>
      </div>
    </WeatherContainer>
  )
}

export default DisplayWeatherForecasts
