import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'

const Nav = ({query,handleInputChange}) => {
  return (
    <nav className='flex border-b-2 border-[#f3f3f3]   justify-between items-center p-5 z-50 ' >
      <input type="text" placeholder='find your Shoes?' className='px-4 py-3 border rounded-md outline-none bg-[#f6f7f6] w-80 relative ' onChange={handleInputChange}
          value={query} />
      <div className='flex gap-3'>
        <button to={"/"}>
          <FiHeart className='w-6 h-6 ' />
        </button>
        <button to={"/"}>
          <AiOutlineShoppingCart className='w-6 h-6 ' />
        </button>
        <button to={"/"}>
          <AiOutlineUserAdd className='w-6 h-6 ' />
        </button>
      </div>
    </nav >
  )
}

export default Nav