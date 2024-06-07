import React from 'react'
import './common.css'
const Button = ({handleButtons,value,title}) => {

  return (
    <button className={`px-3 py-1 text-xl border-2 border-[#ededed] buttonActive`} value={value} onClick={handleButtons} >{title}</button>
  )
}

export default Button