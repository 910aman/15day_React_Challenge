import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'

const PotentialChats = () => {

    const { potentialChats } = useContext(ChatContext)
    // console.log("potential Chats Context Api data", potentialChats);
    return (
        <div>
            {potentialChats.map((data,index) => (
                <div key={index}>
                    Data found{" "}
                    {data?.name}
                </div>
            ))}
        </div>
    )
}

export default PotentialChats