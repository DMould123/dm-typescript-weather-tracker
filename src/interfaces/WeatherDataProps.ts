interface WeatherDataProps {
  name: string
  main: {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  sys: {
    country: string
  }
  weather: {
    main: string
    description: string
  }[]
  wind: {
    speed: number
  }
}

export default WeatherDataProps
