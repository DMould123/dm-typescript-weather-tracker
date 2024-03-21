import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface WeatherSearchProps {
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  handleSearch: () => void
}

const WeatherSearchArea: React.FC<WeatherSearchProps> = ({
  city,
  setCity,
  handleSearch
}) => {
  return (
    <div className="weatherSearchArea">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div className="weatherSearchCircle" onClick={handleSearch}>
        <AiOutlineSearch
          className="weatherSearchIcon"
          data-testid="weatherSearchIcon"
        />
      </div>
    </div>
  )
}

export default WeatherSearchArea
