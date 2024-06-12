import { useEffect, useState } from 'react'
import { baseUrl, getRequestUrl } from '../utils/Services'

export const useDataFetchUser = ({chat, user}) => {

    const [recipientUser, setRecipientUser] = useState([]);
    const [error, setError] = useState(null);
    // const recipientID = chat?.members.find((id) => id !== user._id);
    const recipientID = "666945b1ac9ae57df7ee63cb";

    //    console.log("Recipient ID ",user,"Data of chats",id, );
    console.log("Chats of the data",chat,user);

    const getUser = async() => {
        const response = await getRequestUrl(`${baseUrl}/users/find/666945b1ac9ae57df7ee63cb`);
        // const response = await getRequestUrl(`${baseUrl}/users/find/${recipientID}`);
        console.log("recipientUser found ", response);

        if (!recipientID) return null;
        if (response?.error) {
            return setError(response);
        }
        setRecipientUser(response);
    }
    useEffect(() => {
        getUser();
    }, []);

    return { recipientUser,error };
}
