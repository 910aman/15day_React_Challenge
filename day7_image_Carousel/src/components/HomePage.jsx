import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <main className="w-full h-[94.5vh] flex flex-row justify-center items-center  bg-gradient-to-t from-[#80DEEA] to-[#4c26d4] gap-8 ">
            <Link to={"/first-carousel"} className='h-fit w-fit bg-green-200 hover:bg-green-800 font-bold text-4xl p-4 hover:animate-pulse ' >
                First Slider
            </Link>
            <Link to={"/second-carousel"}  className='h-fit w-fit bg-green-800 hover:bg-green-200 font-bold text-4xl p-4 hover:animate-pulse ' >
                Second Slider
            </Link>
        </main>
    )
}

export default HomePage