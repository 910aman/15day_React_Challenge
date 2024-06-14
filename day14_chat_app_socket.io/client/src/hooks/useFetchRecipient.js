import { useEffect, useState } from 'react'
import { baseUrl, getRequestUrl } from '../utils/Services'

export const useFetchRecipientUser = (chat, user) => {
    const [recipientUser, setRecipientUser] = useState([]);
    const [error, setError] = useState(null);

    const recipientID = chat?.members.find((id) => id !== user?._id);

    console.log("Chats of the data", recipientUser);

    useEffect(() => {
        const getUser = async() => {

            const response = await getRequestUrl(`${baseUrl}/users/find/${recipientID}`);
            console.log("recipientUser found ", response);
            console.log("Chats of the data", recipientUser);

            setRecipientUser(response);

            // if (!recipientID) return null;
            if (response?.error) {
                return setError(error);
            };
        };

        getUser();
    }, []);

    return { recipientUser };
}
