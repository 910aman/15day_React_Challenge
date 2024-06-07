import React from 'react'
import logo from '../assests/logo-color.png'
import { Link, NavLink, } from 'react-router-dom'

const Navbar = () => {
  const navbarDetails = [{ name: "About Us", linkDetails: "about" },
                        {name:"Contact",linkDetails:"contact"},{name:"Jobs",linkDetails:"jobs"}, {name:"Support",linkDetails:"support"}];
  return (
    <header className='flex flex-row w-full bg-zinc-200 px-2 py-2'>
      <NavLink to={"/"} className=' '>
        <img src={logo} className='rounded-full w-10' alt="App Logo" />
      </NavLink>
      <div className='flex flex-1 gap-4 items-center justify-end '>
        {navbarDetails.map((nav, index) => (
          <Link to={nav.linkDetails} className='flex hover:text-red-900 hover:bg-green-300 border-r-2 border-red-600 pr-4 first:border-collapse last:border-collapse'>{nav.name}</Link>
        ))}
      </div>

    </header>
  )
}

export default Navbar