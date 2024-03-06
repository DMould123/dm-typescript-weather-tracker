import { WeatherContainer } from './display.weather.module'
import { AiOutlineSearch } from 'react-icons/ai'

const DisplayWeatherForecasts = () => {
  return (
    <WeatherContainer>
      <div className="container">
        <div className="weatherSearchArea">
          <input type="text" placeholder="Enter a city" />
        </div>
        <div className="weatherSearchCircle">
          <AiOutlineSearch className="weatherSearchIcon" />
        </div>
        <div className="weatherArea">
          <h1>Stockholm</h1>
          <span>SWE</span>
          <div className="icon">icon</div>
          <h1>18c</h1>
          <h2>Rainy</h2>
        </div>
      </div>
    </WeatherContainer>
  )
}

export default DisplayWeatherForecasts
