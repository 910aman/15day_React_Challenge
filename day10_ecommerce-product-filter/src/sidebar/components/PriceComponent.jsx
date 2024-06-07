import React from 'react'
import Input from '../../components/Input'

const PriceComponents = ({handleChange}) => {
  return (
    <div>
      <h2 className='text-xl font-medium mb-5 '>Price</h2>
      <div className='flex flex-col mb-3'>
    
      <Input handleChange={handleChange}
          value=""
          title="All"
          name="test2"
        />
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