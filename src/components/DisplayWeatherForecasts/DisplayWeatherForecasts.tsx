import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { WeatherContainer } from '../../modules/display.weather.module'
import WeatherSearchArea from '../WeatherSearchArea/WeatherSearchArea'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import Footer from '../Footer/Footer'
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill
} from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import WeatherDataProps from '../../interfaces/WeatherDataProps'
import WeatherAppLogo from '../../img/weather-app-logo.png'

const DisplayWeatherForecasts: React.FC = () => {
  const [city, setCity] = useState<string>('')
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const apiKey: string | undefined = import.meta.env.VITE_APIKEY
  const apiEndpoint: string | undefined = import.meta.env.VITE_APP_API_ENDPOINT

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
        <WeatherSearchArea
          city={city}
          setCity={setCity}
          handleSearch={handleSearch}
        />
        <WeatherDisplay
          weatherData={weatherData}
          isLoading={isLoading}
          iconChanger={iconChanger}
        />
        <Footer />
      </div>
    </WeatherContainer>
  )
}

export default DisplayWeatherForecasts
