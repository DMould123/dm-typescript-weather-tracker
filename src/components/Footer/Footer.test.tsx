import { render, screen } from '@testing-library/react'
import Footer from './Footer'

it('renders the Footer component with social links and copyright text', () => {
  render(<Footer />)

  // Check if the LinkedIn icon is present
  const linkedinIcon = screen.getByLabelText('LinkedIn')
  expect(linkedinIcon).toBeInTheDocument()

  // Check if the GitHub icon is present
  const githubIcon = screen.getByLabelText('GitHub')
  expect(githubIcon).toBeInTheDocument()

  // Check if the Twitter icon is present
  const twitterIcon = screen.getByLabelText('Twitter')
  expect(twitterIcon).toBeInTheDocument()

  // Check if the copyright text is present
  const copyrightText = screen.getByText(/David Mould 2024 ©/i)
  expect(copyrightText).toBeInTheDocument()
})
