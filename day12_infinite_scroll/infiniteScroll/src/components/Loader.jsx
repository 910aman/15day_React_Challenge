import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loader = () => {
  return (
    <div className='h-80 p-3 cursor-pointer hover:scale-105 transition-transform ease-in duration-200  '>
      <div className='w-60 h-60 mb-1 '>
        <Skeleton />
      </div>
      <div>
        <div className='flex px-2 justify-between'>
          <h3 className='text-lg font-bold'><Skeleton /> </h3>
          <h2 className='text-xl font-medium'><Skeleton /></h2>
        </div>
      </div>
    </div>
  )
}

export default Loader