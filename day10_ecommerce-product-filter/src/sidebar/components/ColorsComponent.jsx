import React from 'react'
import Input from '../../components/Input'

const ColorComponents = ({ handleChange }) => {
  return (
    <div>
      <h2 className='text-xl font-medium mb-2 '>Category</h2>
      <div className='flex flex-col mb-3 pl-4'>
        
        <Input handleChange={handleChange} value="black" color="#000" name="test3" title="Black" />
        <label className='sidebar-label-container gap-1 flex'>
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test3"
          />
          <span
            className="checkmarks after:!border-black"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          <p className='!ml-[0.7rem] '>White</p>
        </label>
        <Input handleChange={handleChange} value="blue" color="#0C46CD" name="test3" title="Blue" />
        <Input handleChange={handleChange} value="green" color="#0ccd1e" name="test3" title="Green" />
        <Input handleChange={handleChange} value="red" color="#DD0909" name="test3" title="Red" />
      </div>
    </div>
  )
}

export default ColorComponents