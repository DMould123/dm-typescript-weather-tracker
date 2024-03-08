import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { WeatherContainer } from './display.weather.module'
import WeatherAppLogo from '../img/weather-app-logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { WiHumidity } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa'
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill
} from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { RiLoaderFill } from 'react-icons/ri'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import linktreeIcon from '../img/linktree_logo_icon_247832.ico'
import WeatherDataProps from '../interfaces/WeatherDataProps'

const DisplayWeatherForecasts = () => {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const apiKey = import.meta.env.VITE_APIKEY
  const apiEndpoint = import.meta.env.VITE_APP_API_ENDPOINT

  const fetchCurrentWeather = useCallback(
    async (lat: number, lon: number) => {
      const url = `${apiEndpoint}weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      const response = await axios.get(url)
      return response.data
    },
    [apiEndpoint, apiKey]
  )

  const fetchWeatherData = async (city: string) => {
    try {
      const url = `${apiEndpoint}weather?q=${city}&appid=${apiKey}&units=metric`
      const response = await axios.get(url)
      setWeatherData(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching weather data:', error)
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    if (city.trim() === '') {
      return
    }

    setIsLoading(true) // Set isLoading to true when search button is clicked
    fetchWeatherData(city)
  }

  // Function to render weather icon based on weather condition
  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode
    let iconColor: string

    switch (weather) {
      case 'Rain':
        iconElement = <BsFillCloudRainFill />
        iconColor = '#004080'
        break
      case 'Clear':
        iconElement = <BsFillSunFill />
        iconColor = '#FFD700'
        break
      case 'Clouds':
        iconElement = <BsCloudyFill />
        iconColor = '#778899'
        break
      case 'Mist':
        iconElement = <BsCloudFog2Fill />
        iconColor = '#4682B4'
        break
      default:
        iconElement = <TiWeatherPartlySunny />
        iconColor = '#FFA500'
    }

    return (
      <span className="icon" style={{ color: iconColor }}>
        {iconElement}
      </span>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords
          const [currentWeather] = await Promise.all([
            fetchCurrentWeather(latitude, longitude)
          ])
          setWeatherData(currentWeather)
        })
      } catch (error) {
        console.error('Error fetching weather data:', error)
      } finally {
        setIsLoading(false) // Set isLoading to false after current weather data is fetched
      }
    }

    fetchData()
  }, [fetchCurrentWeather])

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

        {/* Render weather data if available and isLoading is false */}
        {weatherData && !isLoading ? (
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">
                {iconChanger(weatherData.weather[0].main)}
              </div>
              <p className="weatherDescription">
                {weatherData.weather[0].description}
              </p>
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
        ) : (
          // Render loading UI if isLoading is true or weather data is not available
          <div className="loading">
            <RiLoaderFill className="loadingIcon" />
            <p>Loading</p>
          </div>
        )}

        {/* Footer component */}
        <footer className="footer">
          <div className="footer-container">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/david-mould-b6731a21a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/DMould123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/DM12_51"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="your-linktree-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linktreeIcon}
                  alt="Linktree"
                  className="social-icon"
                  style={{ width: '24px', height: '24px' }}
                />
              </a>
            </div>
            <div className="copyright">
              <p>David Mould 2024 ©</p>
            </div>
          </div>
        </footer>
      </div>
    </WeatherContainer>
  )
}

export default DisplayWeatherForecasts
