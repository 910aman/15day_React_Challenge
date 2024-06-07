import React from 'react'
import { Link } from 'react-router-dom'

const Thankyou = () => {
  return (
    <main className="w-full h-screen flex self-center place-content-center place-items-center">
      <div className="min-w-[28rem] space-y-5 p-4 shadow-xl border rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 text-white">
        <div className="">
          <h1 className='font-kaushanFont text-6xl text-blue-200 text-center pt-2 pb-8'>Thank you !</h1>
          <p className='text-lg '>Registered Detials are Verified  </p>
          <p className='text-lg'>you should receive a confirmation email soon  </p>
          <Link to={"/login"} className='flex justify-center w-full pt-8 pb-4'>
            <p className='bg-[#708cc1] text-black hover:text-white hover:bg-gray-500 font-medium px-4 py-2 hover:font-bold font-sans rounded-lg capitalize '>
              go to login
            </p>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Thankyou