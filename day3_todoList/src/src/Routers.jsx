import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes path="*" element={<Outlet/>}>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers