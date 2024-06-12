import React, { useState } from 'react'
import SearchPage from './components/SearchPage.jsx'
import Current_Weather from './weather/Current_Weather'
import { REALTIME_WEATHER_URL, WEATHER_API_KEY } from './api/ApiCall.jsx'
import Forecast from './forecast/Forecast.jsx'

const Home = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeather = fetch(`${REALTIME_WEATHER_URL}weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${REALTIME_WEATHER_URL}forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
    // console.log(searchData);
    Promise.all([currentWeather, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error)=>console.log(error))
  }
  console.log(currentWeather,forecastWeather);
  return (
    <div className='container mx-auto bg-gray-100 h-full rounded-b-2xl py-2'>
      <SearchPage onSearchChange={handleOnSearchChange} />
      {currentWeather && <Current_Weather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  )
}

export default Home