import { render, screen } from '@testing-library/react'
import WeatherSearchArea from './WeatherSearchArea'

describe('WeatherSearchArea component', () => {
  it('renders the search icon', () => {
    render(
      <WeatherSearchArea city="" setCity={() => {}} handleSearch={() => {}} />
    )

    // Check if the search icon is present
    const searchIcon = screen.getByTestId('weatherSearchIcon')
    expect(searchIcon).toBeInTheDocument()
  })
})
