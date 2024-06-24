import React from 'react'
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from '../pages/HomePage';
import About from '../pages/About';
import Contact from '../pages/ContactMe.jsx';
import Navbar from '../components/Navbar.jsx';
import MyProjects from '../pages/MyProjects.jsx';

const RoutersPage = () => {
  return (
    <BrowserRouter>
      <div className=' h-fit lg:h-screen container mx-auto pb-3 relative z-50'>
        <Navbar />
        <Routes path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<MyProjects />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default RoutersPage