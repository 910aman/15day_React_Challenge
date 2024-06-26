import React from 'react'
import Input from '../../components/Input'
import './Category.css'

const PriceComponents = ({ handleChange }) => {
  return (
    <div>
      <h2 className='text-xl font-medium mb-2 '>Price</h2>
      <div className='flex flex-col mb-3 pl-4'>
        
        <Input handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />

      </div>
    </div>
  )
}

export default PriceComponents