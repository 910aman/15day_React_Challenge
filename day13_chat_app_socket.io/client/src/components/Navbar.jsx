import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className='flex bg-gray-700 h-14 text-white px-5  justify-between'>
      <Link to={"/"} className=' h-full flex items-center'>
        <h2 className='text-3xl font-bold'>
          ChatApp
        </h2>
      </Link>
      <div>
        {user && <span className='flex items-center h-full font-bold text-xl text-yellow-500 tracking-wider '>
          Logged in as {user?.name}
        </span>}
      </div>
      <nav className=''>
        {user &&
          <div className='flex items-center h-full gap-6'>
             <Link to={"/login"} onClick={() => logoutUser()} className=' h-full flex items-center'>
              <span className='text-xl font-medium'>
                Logout
              </span>
            </Link>
          </div>
        }
        {!user &&
          <div className='flex items-center h-full gap-6'>
            <Link to={"/login"} className=' h-full flex items-center'>
              <span className='text-xl font-medium'>
                Login
              </span>
            </Link>
            <Link to={"/register"} className=' h-full flex items-center'>
              <span className='text-xl font-medium'>
                Register
              </span>
            </Link>
          </div>
        }
      </nav>
    </div>
  )
}

export default Navbar