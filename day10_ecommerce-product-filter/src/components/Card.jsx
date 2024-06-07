import React from 'react'
import { BsFillBagHeartFill } from 'react-icons/bs'

const Card = ({ newPrice, prevPrice, title, img, star, reviews }) => {
  
  return (
    <section className=' m-3 p-5 border-2 border-[#ededed] cursor-pointer '>
      <div className='w-52 h-40 mb-1 bg-gray-200'>
        <img src={img} alt="Shoes Img" className='w-full h-full' />
      </div>
      <div className=''>
        <h3 className='mb-1 text-lg font-bold '>{title}</h3>
        <section className='flex mb-1 items-center '>
        {star}{star}{star}{star}{star}
          <span className='text-lg ml-3 font-semibold'>{reviews}</span>
        </section>
        <section className='flex items-center justify-between text-lg font-semibold'>
          <div >
            <del className=''>{prevPrice}</del>&nbsp;${newPrice}
          </div>
          <div>
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Card