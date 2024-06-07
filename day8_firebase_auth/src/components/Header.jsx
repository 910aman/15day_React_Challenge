import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { doSignOut } from '../firebase/auth'
import GoogleImage from '../assets/google.png'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-end items-center bg-gray-200'>
            <div className='mr-10 gap-4 flex flex-row'>
                {userLoggedIn ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 flex items-center gap-2 underline'>
                            <img src={GoogleImage} alt="Goolge Img" className='h-4 ' />
                            <div className=''>Logout</div>
                        </button>
                    </>
                    :
                    <>
                        <Link className='text-sm text-blue-600 underline' to={'/login'}>Login</Link>
                        <Link className='text-sm text-blue-600 underline' to={'/register'}>Register New Account</Link>
                    </>
                }
            </div>
        </nav>
    )
}

export default Header