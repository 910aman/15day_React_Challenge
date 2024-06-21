import React from 'react'

const   ForecastComponents = ({value,label}) => {
    return (
        <div className='flex w-full flex-1 justify-between items-center cursor-pointer  gap-1 '>
            <span className='text-left font-normal text-base text-[#757575] whitespace-nowrap'>{value}</span>
            <span className='text-right font-medium text-lg text-[#212121] whitespace-nowrap '>{label}</span>
        </div>
    )
}

export default ForecastComponents