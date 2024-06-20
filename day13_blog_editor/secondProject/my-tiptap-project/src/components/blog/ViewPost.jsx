import React from 'react'
import parse from 'html-react-parser';


const ViewPost = ({ content }) => {
  return (
    <div className='mt-3 '>
      <h1 className='text-3xl font-semibold text-center border-b pb-4'>Temparory Content Saved</h1>
      <div className='py-4 mb-10 bg-gray-100 px-4'>
        {parse(content)}
      </div>
    </div>
  )
}

export default ViewPost
