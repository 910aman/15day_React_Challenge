import React, { useState } from 'react'
// import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
// import HomePage from './components/HomePage'
import Navigation from './navigation/Nav.jsx'
import Sidebar from './sidebar/Sidebar'
import products from './db/Data.jsx'
import Card from './components/Card'
import Products from './product/Products.jsx'
import Recommended from './recommended/Recommended.jsx'

const RoutersPage = () => {

  const [selectedQuery, setSelectedQuery] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }


  const handleChange = (event) => {
    setSelectedQuery(event.target.value);
  }

  const handleButtons = (event) => {
    setSelectedQuery(event.target.value)
  }

  const filteredItems = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  function filterData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) => (
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected))

      return filteredProducts.map(({ newPrice, prevPrice, title, img, star, reviews }) =>
      (<Card key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice} />))
    }
  }

  const results = filterData(products, selectedQuery, query);

  return (
    <div className='container mx-auto flex '>
      <div className='w-[15%] h-[100vh] border-r-2 border-[#e5e5e5] flex z-30 overflow-y-auto'>
        <Sidebar handleChange={handleChange} />
      </div>
      <div className='w-full flex-1'>
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleButtons={handleButtons} />
        <div className='overflow-y-auto h-[78vh]'>
          <Products results={results} />
        </div>
      </div >
    </div >
  )
}

export default RoutersPage