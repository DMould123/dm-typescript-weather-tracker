import styled from 'styled-components'

export const WeatherContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weatherLogo {
    width: 100px;
    height: auto;
    margin-top: 20px;
  }

  .weatherSearchArea {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .weatherSearchArea > input {
    outline: none;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
  }

  .weatherSearchCircle {
    border: 1px solid grey;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
  }

  .weatherSearchIcon {
    font-size: 20px;
    color: grey;
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
  }

  .icon {
    font-size: 5rem;
  }

  .weatherArea h1 {
    font-size: 3rem;
    font-family: 'Bebas Neue', sans-serif;
  }

  .weatherArea span {
    margin-bottom: 10px;
    font-family: 'Inter', sans-serif;
  }

  .weatherArea h2 {
    font-size: 2rem;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  .lowerWeatherInfoArea {
    display: flex;
    flex-wrap: wrap; /* Ensure items wrap to the next line */
    justify-content: space-around;
    font-family: 'Josefin Sans', sans-serif;
    margin: 20px;
    background: linear-gradient(
      90deg,
      rgba(243, 255, 253, 1) 0%,
      rgba(253, 255, 232, 1) 100%
    );
    border-radius: 12px;
    padding: 10px;
  }

  .humidityLevel,
  .windSection,
  .temperatureSection {
    /* Added temperatureSection */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    width: 150px; /* Adjust width as needed */
    height: 150px; /* Make it square */
    padding: 10px;
  }

  .weatherIcon {
    font-size: 4.5rem;
    margin-bottom: 10px;
  }
  .weatherDescription {
    font-size: 1.5rem;
    color: blue;
    margin-top: 20px;
  }

  .weatherInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weatherInfo h1 {
    margin-bottom: 5px;
  }

  .weatherInfo p {
    font-size: 0.8rem;
  }
  .loading {
    height: 400px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .loadingIcon {
      font-size: 3rem;
      animation: spin 2s linear infinite;
    }
    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: 'Josefin Sans', sans-serif;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
