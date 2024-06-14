
import { useEffect, useState } from 'react';
import AddUser from './components/AddUser';
import { io } from 'socket.io-client'
import ChatPage from './components/ChatPage';

function App() {
  //Adding a new User
  const [userName, setUserName] = useState("")
  const [chatActive, setChatActive] = useState(false)

  //Chat Page
  const socket = io("http://localhost:5000");
  const [userMessage, setUserMessage] = useState("")
  const [allMessages, setAllMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {
      message: userMessage,
      user: userName,
      time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
    };
    if (!userMessage == "") {
      socket.emit("send-message", message);
    } else {
      alert("Message cannot be empty")
    }
    setUserMessage("");
    // !userMessage == "" ? socket.emit("send-message", message) : alert("Message cannot be empty")
  }

  useEffect(() => {
    socket.on("received-message", (message) => {
      setAllMessages([...allMessages, message])
    })
  }, [allMessages, socket])


  return (
    <>
      <div className="w-screen  h-screen bg-gray-100 container mx-auto">
        {chatActive ? <div>
          <ChatPage userName={userName} allMessages={allMessages} handleSubmit={handleSubmit} userMessage={userMessage} setUserMessage={setUserMessage} />
        </div> :
          <div><AddUser setChatActive={setChatActive} setUsername={setUserName} userName={userName} /></div>}
      </div>
    </>
  )
}

export default App



