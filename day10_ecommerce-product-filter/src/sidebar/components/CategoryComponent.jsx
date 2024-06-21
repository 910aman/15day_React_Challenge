import React from 'react'
import './Category.css'
import Input from '../../components/Input'

const CategoryComponent = ({ handleChange }) => {
  return (
    <div>
      <h2 className='text-xl font-medium mb-2 '>Category</h2>
      <div className='flex flex-col mb-3 pl-4'>
       
        <Input handleChange={handleChange} value="flats" name="test1" title="Flats" />
        <Input handleChange={handleChange} value="sneakers" name="test1" title="Sneakers" />
        <Input handleChange={handleChange} value="sandals" name="test1" title="Samdals" />
        <Input handleChange={handleChange} value="heels" name="test1" title="Heels" />
      </div>
    </div>
  )
}

export default CategoryComponent