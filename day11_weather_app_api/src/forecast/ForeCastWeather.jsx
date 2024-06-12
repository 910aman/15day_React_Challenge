import React from 'react'

const ForecastComponents = ({value,label}) => {
    return (
        <div className='flex w-full flex-1 justify-between items-center cursor-pointer'>
            <span className='text-left font-normal text-base text-[#757575]'>{value}</span>
            <span className='text-right font-semibold text-lg text-[#212121] '>{label}</span>
        </div>
    )
}

export default ForecastComponents