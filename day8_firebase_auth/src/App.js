import ForgetPassword from "./components/auth/ForgetPassword";
import Login from "./components/auth/LoginPage";
import Register from "./components/auth/RegisterPage";

import Header from "./components/Header";
import Home from "./components/HomePage";

import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <div className="w-full h-screen flex flex-col">
          <Routes path= "*" element={<Outlet />} >
            <Route  path="/login" element ={<Login />} />
            <Route path= "/register" element={<Register />}/>
            <Route  path= "/home" element={<Home />}/>
            <Route path="/forget-password" element={<ForgetPassword/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
