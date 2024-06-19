import React from 'react'
import parse from 'html-react-parser';


const ViewPost = ({content}) => {
  return (
    <div className='mt-3'>
        {parse(content)}
    </div>
  )
}

export default ViewPost