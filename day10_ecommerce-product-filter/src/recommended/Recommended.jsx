import React from 'react'
import Button from '../components/Button'

const Recommended = ({ handleButtons }) => {
  return (
    <div className='ml-4 pb-4 border-b border-[#f3f3f3]'>
      <h2 className='font-mono font-bold text-lg '>Recommended</h2>
      <div className='flex gap-4'>
        <Button title={"All Products"} value="" handleButtons={handleButtons} />
        <Button title={"Nike"} value={"Nike"} handleButtons={handleButtons} />
        <Button title={"Puma"} value={"Puma"} handleButtons={handleButtons} />
        <Button title={"Vans"} value={"Vans"} handleButtons={handleButtons} />
        <Button title={"Adidas"} value={"Adidas"} handleButtons={handleButtons} />
      </div>
    </div>
  )
}

export default Recommended