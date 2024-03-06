import axios from 'axios'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const BASE_URL = 'https://api.weatherapi.com/v1'

// Function to fetch weather forecast
export const fetchWeatherForecast = async (location: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching weather forecast:', error)
    throw error
  }
}
