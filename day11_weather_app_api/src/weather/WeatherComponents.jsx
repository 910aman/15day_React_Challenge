import React from 'react'

const WeatherComponents = ({value,label}) => {
    return (
        <div className='flex w-36 justify-between items-center'>
            <span className='text-left font-normal text-sm'>{value}</span>
            <span className='text-right font-semibold text-base'>{label}</span>
        </div>
    )
}

export default WeatherComponents