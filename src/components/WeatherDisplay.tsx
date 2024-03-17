import React from 'react'
import WeatherDataProps from '../interfaces/WeatherDataProps'
import { WiHumidity } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa'
import { RiLoaderFill } from 'react-icons/ri'

interface WeatherDisplayProps {
  weatherData: WeatherDataProps | null
  isLoading: boolean
  iconChanger: (weather: string) => React.ReactNode
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weatherData,
  isLoading,
  iconChanger
}) => {
  return (
    <>
      {weatherData && !isLoading ? (
        <>
          <div className="weatherArea">
            <h1>{weatherData.name}</h1>
            <span>{weatherData.sys.country}</span>
            <div className="icon">
              {iconChanger(weatherData.weather[0].main)}
            </div>
            <p className="weatherDescription">
              <span>{weatherData.weather[0].description}</span>
            </p>
          </div>
          <div className="lowerWeatherInfoArea">
            <div className="humidityLevel">
              <WiHumidity className="weatherIcon" data-testid="humidity-icon" />
              <div className="weatherInfo">
                <h1>{weatherData.main.humidity}%</h1>
                <p>Current Humidity: </p>
              </div>
            </div>
            <div className="windSection">
              <SiWindicss className="weatherIcon" data-testid="wind-icon" />
              <div className="weatherInfo">
                <h1>{weatherData.wind.speed}km/h</h1>
                <p>Wind Speed: </p>
              </div>
            </div>

            <div className="temperatureSection">
              <FaTemperatureLow
                className="weatherIcon"
                data-testid="min-temperature-icon"
              />
              <div className="weatherInfo">
                <h1>{weatherData.main.temp_min}°C</h1>
                <p>Min Temperature: </p>
              </div>
            </div>

            <div className="temperatureSection">
              <FaTemperatureHigh
                className="weatherIcon"
                data-testid="max-temperature-icon"
              />
              <div className="weatherInfo">
                <h1>{weatherData.main.temp_max}°C</h1>
                <p>Max Temperature: </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading">
          <RiLoaderFill className="loadingIcon" />
          <p>Loading</p>
        </div>
      )}
    </>
  )
}

export default WeatherDisplay
