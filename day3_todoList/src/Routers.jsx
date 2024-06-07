import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'

const Routers = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Outlet/>}>
                <Route path='/' element={<Home/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routers