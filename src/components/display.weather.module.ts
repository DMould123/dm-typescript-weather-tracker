import styled from 'styled-components'

export const WeatherContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #c7c7eb, #ccf2dd);
  display: flex;
  justify-content: center;
  align-items: center;

  .weather-container {
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
    align-items: center;
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
  .windSection {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }

  .weatherIcon {
    font-size: 3rem;
    margin-right: 10px;
  }
`
