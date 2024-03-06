import styled from 'styled-components'

export const WeatherContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #a3f4a1, #c7ebb7);
  .container {
    background-color: #ffffff7d;
    border-radius: 12px;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }

  .weatherSearchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .weatherSearchArea > input {
    outline: none;
    border: none;
    border: 1px solid grey;
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: transparent;
  }
  .weatherSearchCircle {
    border: 1px solid grey;
    width: 30px; /* Adjust the width of the circle as needed */
    height: 30px; /* Ensure the height matches the width for a perfect circle */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > .weatherSearchIcon {
      font-size: 20px;
      color: grey;
    }
  }
`
