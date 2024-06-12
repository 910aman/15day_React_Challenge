import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CryptoCard = ({ myData }) => {
  const {title, id, body,} = myData;
  return (
    <div className='h-80 w-70 bg-gray-200 p-3 cursor-pointer hover:scale-105 transition-transform ease-in duration-200  '>
      <div className='w-60 h-60 mb-1 '>
        <p>{id}</p>
        {/* <img src={image} alt="Crypto Image" className='bg-cover w-full h-full overflow-hidden' /> */}
     
        <div className='flex px-2 justify-between'>
          <h3 className='text-lg font-bold justify-self-auto ' >{title}</h3>
        </div>
          <h2 className='text-xl font-medium overflow-hidden' >{body.substr(0,100)}</h2>
      </div>
    </div>
  )
}

export default CryptoCard