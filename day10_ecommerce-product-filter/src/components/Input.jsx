import React from 'react'
import './common.css'
const Input = ({handleChange,value,title,name,color}) => {
  
  return (
    <label className='sidebar-label-container gap-1 flex'>
      <input type="radio" onClick={handleChange} name={name} value={value}  id="" className={`absolute opacity-0 cursor-pointer`} />
      <span className={`checkmarks`} style={{ backgroundColor: color }}></span>
      <p>{title}</p>
    </label>

  )
}

export default Input