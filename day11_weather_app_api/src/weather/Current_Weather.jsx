import React from 'react'

import WeatherComponents from './WeatherComponents'
const Current_Weather = ({ data }) => {
  return (
    <div className=' w-fit rounded-md shadow-2xl shadow-gray-300 text-white bg-[#a0cea0] mt-6 mx-auto px-5 pb-5'>
      <div className='flex justify-between items-center '>
        <div>
          <p className='font-semibold text-lg leading-3 m-0 tracking-wider	'>{data?.city}</p>
          <p className='font-normal text-base leading-3 mt-2 tracking-wider'>{data?.weather[0].description}</p>
        </div>
        {/* <img src={`../icons/${data?.weather[0].icon}.png`} alt="Weather Icon" className='w-32 py-5'/> */}
        <img src={`icons/${data?.weather[0].icon}.png`} alt="Weather Icon" className='w-32 py-1'/> 
      </div>
      <div className='flex gap-3'>
        <p className='font-semibold text-6xl w-auto tracking-normal my-10 mx-auto '>{Math.round(data?.main.temp)} °C</p>
        <div className='flex flex-col px-4'>
          <div className='w-full'>
            <span className='font-bold underline'>Details</span>
          </div>
          <WeatherComponents value={"Feels Like"} label={`${Math.round(data?.main.feels_like)} °C`}/>
          <WeatherComponents value={"Wind"} label={`${data?.wind.speed} m/s`} />
          <WeatherComponents value={"Humidity"} label={`${data?.main.humidity} %`} />
          <WeatherComponents value={"Pressure"} label={`${data?.main.pressure} hPa`} />
        </div>
      </div>
    </div>
  )
}

export default Current_Weather