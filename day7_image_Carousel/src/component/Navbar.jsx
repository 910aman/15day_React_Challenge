import React, { useState } from 'react'
import logo from '../assets/logo_color.png'

import threeDotSvg from '../assets/three-dot.svg'
import closeIconSvg from '../assets/close_Icon.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navbarDetails = [
    { navName: "About Us", linkDetails: "about" },
    { navName: "Contact", linkDetails: "contact" },
    { navName: "Jobs", linkDetails: "jobs" },
    { navName: "Support", linkDetails: "support" }];

  const [manageNav, setManageNav] = useState(false);

  return (
    <header className='lg:flex lg:flex-row w-full bg-zinc-200 lg:px-2 px-1  py-2'  >
      <div className='flex lg:flex-1 justify-between items-center '>
        <nav to={"/"} className='flex items-center w-fit'>
          <img src={logo} className='rounded-full w-10' alt="App Logo" />
        </nav>
        <nav className='lg:flex flex-1 w-fit gap-4 items-center justify-end shift hidden '>
          {navbarDetails?.map((nav, index) => (
            <div  key={index} className='flex border-r-2 border-red-600 pr-4 last:border-0 '>
              <ul>
                <li className=' text-xl py-2 nav-tab hover:text-white font-semibold'>
                  <a>{nav.navName}</a>
                </li>
              </ul>
            </div>
          ))}
        </nav>
        <button className='w-fit lg:hidden' onClick={() => setManageNav(true)}>
          <img src={threeDotSvg} alt="" />
        </button>
      </div>

      <div className='flex justify-end items-center lg:hidden relative  '>

        {manageNav &&
          <>
            <nav className='flex flex-col absolute  mt-[232px] z-50 bg-green-400 min-w-full max-w-full shift '>
              <button className='flex justify-end pr-2 pt-1 absolute right-0' onClick={() => setManageNav(false)}>
                <img src={closeIconSvg} alt="" />
              </button>
              <div className='pt-0'>
                {navbarDetails.map((nav, index) => (
                  <button to={nav.linkDetails} key={index} className='flex flex-1 justify-center w-full'>
                    <ul>
                      <li className=' text-xl nav-tab py-2 hover:text-white font-semibold w-40 flex justify-center'>
                        <a className='w-full flex justify-center'>{nav.navName}</a>
                      </li>
                    </ul>
                  </button>
                ))}
              </div>
            </nav>
          </>
        }
      </div>

    </header>
  )
}

export default Navbar