import React from 'react'
import SearchPage from './SearchPage.jsx'

const Home = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className='container mx-auto'>
        <SearchPage onSearchChange={handleOnSearchChange}/>
        <div className='text-xl font-bold underline'>
          Helllooo Everyone
        </div>
    </div>
  )
}

export default Home