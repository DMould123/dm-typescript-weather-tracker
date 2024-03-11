import { render, screen } from '@testing-library/react'
import App from './App'

it('renders the DisplayWeatherForecasts component inside App', () => {
  render(<App />)

  const appElement = screen.getByTestId('app')
  expect(appElement).toHaveClass('App')
})
