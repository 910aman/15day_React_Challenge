import { useEffect, useState } from 'react';
import avatarImg from '../../assets/avatar.svg';
import { baseUrl, getRequestUrl } from '../../utils/Services';
// import { useDataFetchUser } from '../../hooks/useDataFetchUser';
const UserChat = ({chat, user}) => {

  const { recipentUser } = useDataFetchUser(chat, user);

  console.log("Data's from mongoose ",chat,user, recipentUser);
  // bg-[#585757] 
  return (
    <div className='flex gap-2 items-center p-2 rounded-sm border-b border-white cursor-pointer'>
      <div className='me-2 w-7'>
        <img src={avatarImg} alt="Avatar Image" />
      </div>
      <div className='flex flex-col '>
        <div className='flex justify-between gap-32'>
          <h2 className='font-semibold text-xl whitespace-nowrap'>User name{recipentUser?.name}</h2>
          <p className='text-gray-200 items-center flex'>12/12/2024</p>
        </div>
        <div className='flex justify-between gap-32'>
          <h4 className='whitespace-nowrap font-medium text-base'>Text Message from user</h4>
          <p className='bg-green-500 px-2 py-1 w-fit rounded-full '>3</p>
        </div>
        <p className='bg-green-500 absolute ml-[310px] p-1 w-fit rounded-full'></p>
      </div>
    </div>
  )
}

export default UserChat


export const  useDataFetchUser = ({chat, user}) => {

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
