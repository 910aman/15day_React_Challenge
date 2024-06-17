import React from 'react'
import { MdSend } from "react-icons/md";

const ChatPage = ({userName,allMessages,handleSubmit,setUserMessage,userMessage}) => {
  
    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            <section className=' rounded-md w-full px-4 md:px-0 md:w-[40vw] mx-auto'>
              <div>
                <h1 className='text-center font-bold text-xl'>WELCOME TO GROUP CHAT</h1>
              </div>
              <div className='w-full flex flex-col justify-center '>
                <div className='overflow-auto mb-2 h-[80vh] lg:h-[60vh] border border-[#e9e4e4] px-4 '>
                {/* <h3>You logined as {allMessages.map((message)=> message.user[0])}</h3> */}
                  {allMessages?.map((message, index) => (
                    <div key={index} className={`flex  my-5 w-fit  ${userName === message?.user && "ml-auto"}`}>
                      <div className='rounded-lg shadow-lg flex '>
                        <div className='bg-green-500 flex items-center rounded-l-md'>
                          <h3 className='font-bold text-lg px-2 '>
                            {message?.user.charAt(0).toUpperCase()}
                          </h3>
                        </div>
                        <div className='px-2 bg-white rounded-r-md py-1'>
                          <span className='text-sm'>{message?.user}</span>
                          <h3 className='font-bold'>{message?.message}</h3>
                          <h5 className='flex justify-end text-xs'>{message?.time}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <form className='flex-row flex' onSubmit={handleSubmit}>
                  <input type="text" name="message" onChange={(e) => setUserMessage(e.target.value)} value={userMessage} className="w-full block  rounded-l-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Type your message" />
                  <button type="submit" className='flex items-center px-2 relative bg-black text-white rounded-r-md'><MdSend className=' -rotate-45' /></button>
                </form>
              </div>
            </section>
          </div>
    )
}

export default ChatPage