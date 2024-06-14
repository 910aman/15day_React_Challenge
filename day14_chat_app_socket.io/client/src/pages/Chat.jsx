import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext';
import UserChat from '../components/ChatBox/UserChat';
import { AuthContext } from '../context/AuthContext';
import PotentialChats from '../components/ChatBox/PotentialChats';

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { usersChat, isChatLoading, } = useContext(ChatContext);

  return (
    <div className='mt-4'>
      <PotentialChats />
      {usersChat?.length < 1 ? null :
        (<div className='flex gap-10 items-start h-40 '>
          <div className='flex-1 flex-grow-0'>
            {isChatLoading && <p className='whitespace-nowrap flex'>Loading Chats....</p>}
            {usersChat?.map((chat, index) => (
              <div key={index}>
                <UserChat chat={chat} user={user} />
              </div>
            ))}

          </div>
          <p>Chatbox</p>
        </div>
        )}
    </div>
  )
}

export default Chat