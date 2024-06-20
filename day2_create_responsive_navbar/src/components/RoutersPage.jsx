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
import Calendar from '../pages/Calendar';
import Projects from '../pages/Projects';
import Navbar from './Navbar';

const RoutersPage = () => {
  return (
    <div className='container mx-auto'>

      <BrowserRouter>
        <Navbar />
        <Routes path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default RoutersPage