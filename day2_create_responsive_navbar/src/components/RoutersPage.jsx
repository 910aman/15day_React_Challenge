import React from 'react'
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Navbar from './Navbar';

const RoutersPage = () => {
  return (
    <div className='container mx-auto'>

      <BrowserRouter>
        <Navbar />
        <Routes path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default RoutersPage