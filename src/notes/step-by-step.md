# Step-by-Step Guide to Building the DM Weather App

## Introduction

This guide provides step-by-step instructions on how to create this Weather App, a web application that allows users to search for current weather conditions in various cities around the world, using modern web technologies such as React, Vite, TypeScript, Axios, Styled Components, and React Icons.

## Installation

Initialize Project: Create a new Vite project with React and TypeScript setup:

```bash
npm create vite@latest typescript-weather-app -- --template react
cd typescript-weather-app
```

Install Dependencies: Install the required dependencies:

```
npm install axios react-icons styled-components
```

Run the Development Server: Start the development server to see the initial setup:

```
npm run dev
```

## Folder Structure

Create the following directories and files:

src/
├── components/
│ ├── App.tsx
│ ├── WeatherDisplay.tsx
│ └── WeatherSearchArea.tsx
├── interfaces/
│ └── WeatherDataProps.ts
├── styles/
│ └── App.css
├── App.tsx
├── index.css
└── index.html

## Components

Step 1: Set Up App Component

```
import DisplayWeatherForecasts from './DisplayWeatherForecasts';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="app">
      <DisplayWeatherForecasts />
    </div>
  );
}

export default App
```

### Simple Explanation

- Initializes the main App component.
- Imports DisplayWeatherForecasts component.
- Renders DisplayWeatherForecasts component within a div.

Step 2: Create the DisplayWeatherForecasts Component in `src/components/DisplayWeatherForecasts.tsx`

```
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import WeatherSearchArea from './WeatherSearchArea';
import WeatherDisplay from './WeatherDisplay';
import Footer from './Footer';
import { WeatherContainer } from './display.weather.module';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import WeatherDataProps from '../interfaces/WeatherDataProps';
import WeatherAppLogo from '../img/weather-app-logo.png';

const DisplayWeatherForecasts: React.FC = () => {
  // State variables declaration and initialization
  // Fetch weather data functions
  // Icon changer function
  // useEffect for fetching weather data based on geolocation
  // Return statement rendering WeatherContainer, WeatherSearchArea, WeatherDisplay, Footer
}

export default DisplayWeatherForecasts
```

### Simple Explanation

- Creates the DisplayWeatherForecasts component.
- Implements state variables, fetch functions, and rendering logic for weather data display.

Step 3: Create the Create WeatherDisplay Component in `src/components/WeatherDisplay.tsx`

```
import WeatherDataProps from '../interfaces/WeatherDataProps';
import { WiHumidity } from 'react-icons/wi';
import { SiWindicss } from 'react-icons/si';
import { FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import { RiLoaderFill } from 'react-icons/ri';

interface WeatherDisplayProps {
  // Prop types declaration
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  // Destructure props
}) => {
  // Rendering weather data or loading indicator
}

export default WeatherDisplay
```

### Simple Explanation

- Creates the DisplayWeatherForecasts component.
- Implements state variables, fetch functions, and rendering logic for weather data display.

Step 4: Create the WeatherSearchArea Component in `src/components/WeatherSearchArea.tsx`

```
import { AiOutlineSearch } from 'react-icons/ai';

interface WeatherSearchProps {
  // Prop types declaration
}

const WeatherSearchArea: React.FC<WeatherSearchProps> = ({
  // Destructure props
}) => {
  // Renders a search input and button
}

export default WeatherSearchArea;
```

### Simple Explanation

- Implements the WeatherSearchArea component for user input.
- Allows users to input a city name and triggers a search when the search button is clicked.

Step 5: Create the Footer Component in `src/components/Footer.tsx` (This step is optional!)

```
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import linktreeIcon from '../img/linktree_logo_icon_247832.ico';

const Footer: React.FC = () => {
  // Renders social media links and Linktree icon
}

export default Footer
```

### Simple Explanation

- Sets up the Footer component to display social media links and a Linktree icon.
- Displays copyright information.
