import React, { useState } from 'react'
import Avatar from '../assets/avatar.svg'


const AddUser = ({ setChatActive,userName,setUsername }) => {
    // const [userChat, setUserChat] = useState("");
    // const [activeChat, setActiveChat] = useState(false)

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='max-w-lg mh- w-full '>
                <label className="block text-lg  font-semibold leading-6 text-gray-900">Adding a New User</label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="relative inset-y-0 left-0  flex items-center pl-3 w-5 h-5 ">
                        <img src={Avatar} className="absolute mt-14 text-gray-500 sm:text-sm border rounded-full border-gray-100" />
                    </div>
                    <input type="text" name="newUser" onChange={(e) => setUsername(e.target.value)} value={userName} className="block w-full rounded-md border-0 py-1.5 pl-12 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Jhon Doe" />
                    <div className="absolute inset-y-0 right-0 top-5 flex items-center">

                        <button onClick={() => { !userName == "" && setChatActive(true) }} className="h-9 rounded-md border bg-transparent py-0 pl-2 pr-7 flex items-center text-gray-100 focus:ring-2 focus:ring-inset !bg-[#423535]  focus:ring-indigo-600 sm:text-sm">
                            <p>Add User</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser