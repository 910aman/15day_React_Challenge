import React, { useState } from 'react'
import { MdSend } from "react-icons/md";
import { io } from 'socket.io-client'

const ChatPage = ({userName}) => {
    const socket = io("http://localhost:5000");
    const [userMessage, setUserMessage] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        const message = {
            message: userMessage,
            user: userName,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
        };
        socket.emit("send-message",message)
    }

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <section className=' max-w-xl '>
                <div>
                    <h1>Squad Chat</h1>
                </div>
                <div className='w-full flex flex-col justify-center '>
                    <div>

                    </div>
                    <form className='flex-row flex' onSubmit={handleSubmit}>
                        <input type="text" name="message" onChange={(e) => setUserMessage(e.target.value)} value={userMessage} className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Type your message" />
                        <button type="submit" className='flex items-center px-2 relative bg-black text-white right-8 rounded-r-md'><MdSend className=' -rotate-45'/></button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ChatPage