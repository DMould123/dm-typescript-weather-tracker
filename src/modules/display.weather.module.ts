import styled from 'styled-components'

export const WeatherContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #667eea, #764ba2);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    margin: auto;
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
    width: 100%;
    max-width: 400px;
  }

  .weatherSearchArea > input {
    outline: none;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    flex: 1;
    margin-right: 10px;
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
    flex-wrap: wrap;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    width: 150px;
    height: 150px;
    padding: 10px;
  }

  .weatherIcon {
    font-size: 4.5rem;
    margin-bottom: 10px;
  }

  .weatherDescription {
    font-size: 1.5rem; /* Smaller font size for description */
    color: #333;
    margin-top: 20px;
    text-align: center;
    text-transform: capitalize;
  }

  .weatherDescription span {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 20px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .weatherDescription span:hover {
    background-color: #e0e0e0;
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
    .weatherDescription {
      font-size: 16px;
      color: #555;
      margin-top: 5px;
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

  /* Responsive adjustments */
  @media (max-width: 640px) {
    .weatherLogo {
      width: 80px;
    }
    .weatherSearchArea {
      flex-direction: column;
    }
    .weatherSearchArea > input {
      width: 100%;
      margin: 10px 0;
    }
    .icon {
      font-size: 4rem;
    }
    .weatherDescription {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    .weatherLogo {
      width: 90px;
    }
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 90%;
    }
  }
`
