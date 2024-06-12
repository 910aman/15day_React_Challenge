import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Outlet, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";


function App() {

  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto !text-white !font-firstFont !leading-4 ">
      <ChatContextProvider user={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />} />
          <Route path="/register" element={user ? <Chat /> : <Register />} />
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="*" element={<Outlet to={"/"} />} />
        </Routes>
      </ChatContextProvider>
    </div>
  );
}

export default App;
