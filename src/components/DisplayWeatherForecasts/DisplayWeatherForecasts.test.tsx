import { render, screen } from '@testing-library/react'
import DisplayWeatherForecasts from './DisplayWeatherForecasts'

it('renders the DisplayWeatherForecasts component', () => {
  render(<DisplayWeatherForecasts />)

  // Check if the weather search input field is present
  const searchInput = screen.getByPlaceholderText('Enter a city')
  expect(searchInput).toBeInTheDocument()

  // Check if the weather logo is present
  const weatherLogo = screen.getByAltText('Weather App Logo')
  expect(weatherLogo).toBeInTheDocument()
})
