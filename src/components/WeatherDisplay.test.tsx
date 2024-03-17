import { render, screen } from '@testing-library/react'
import WeatherDisplay from './WeatherDisplay'

// Mock weather data
const mockWeatherData = {
  name: 'City Name',
  sys: { country: 'Country Code' },
  weather: [{ main: 'Clouds', description: 'Cloudy' }],
  main: { temp: 15, temp_min: 10, temp_max: 20, humidity: 50 },
  wind: { speed: 15 }
}

describe('WeatherDisplay component', () => {
  it('renders the WeatherDisplay component with weather icons', () => {
    render(
      <WeatherDisplay
        weatherData={mockWeatherData}
        isLoading={false}
        iconChanger={() => null}
      />
    )

    // Check if the humidity icon is present
    const humidityIcon = screen.getByTestId('humidity-icon')
    expect(humidityIcon).toBeInTheDocument()

    // Check if the wind icon is present
    const windIcon = screen.getByTestId('wind-icon')
    expect(windIcon).toBeInTheDocument()

    // Check if the min temperature icon is present
    const minTempIcon = screen.getByTestId('min-temperature-icon')
    expect(minTempIcon).toBeInTheDocument()

    // Check if the max temperature icon is present
    const maxTempIcon = screen.getByTestId('max-temperature-icon')
    expect(maxTempIcon).toBeInTheDocument()
  })
})
