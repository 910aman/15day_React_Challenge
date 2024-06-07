import React from 'react'
import {
    BrowserRouter,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import Thankyou from './pages/Thankyou';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';


const Routers = () => {

    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                 <Route path="/" element={<Outlet />}>
                 <Route path='/home' element={<HomePage/>} />
                    <Route path='/register' element={<RegisterPage/>} />
                    <Route path='/login' element={<LoginPage/>} />
                    <Route path='/thankYou' element={<Thankyou/>} />

                 </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routers