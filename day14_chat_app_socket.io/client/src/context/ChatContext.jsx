import { createContext, useEffect, useState } from "react";
import { baseUrl, getRequestUrl } from "../utils/Services";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [usersChat, setUsersChat] = useState(null)
    const [isChatLoading, setIsChatLoading] = useState(false)
    const [userChatsError, setUserChatsError] = useState(null)
    const [potentialChats, setPotentialChats] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequestUrl(`${baseUrl}/users`);

            if (response.error) {
                return console.log("Error Fetching users", response);
            }
            const personalChats = await response.filter((user) => {
                let isChatCreated = false
                if (user._id === user.id) return false

                if (usersChat) {
                    isChatCreated = usersChat?.some((chat) => {
                        return chat.members[0] === user._id || chat.members[1] === user._id
                    })
                }
                return !isChatCreated;
            });
            setPotentialChats(personalChats);
        }
        getUsers()
    }, [])


    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsChatLoading(true);
                setUserChatsError(null)
                const response = await getRequestUrl(`${baseUrl}/chats/${user?._id}`)
                setIsChatLoading(false);

                if (response?.error) {
                    return setUserChatsError(response)
                }
                setUsersChat(response)
            }
        }
        getUserChats()
    }, [user])
    return (
        <ChatContext.Provider value={{ usersChat, isChatLoading, userChatsError, potentialChats }}>
            {children}
        </ChatContext.Provider>
    )
}