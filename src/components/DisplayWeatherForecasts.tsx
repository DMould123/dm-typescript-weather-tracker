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
      </div>
    </WeatherContainer>
  )
}

export default DisplayWeatherForecasts
