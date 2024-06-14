
import { useEffect, useState } from 'react';
import avatarImg from '../../assets/avatar.svg';
import { useFetchRecipientUser } from '../../hooks/useFetchRecipient';
import { baseUrl, getRequestUrl } from '../../utils/Services';
// import { useDataFetchUser } from '../../hooks/useDataFetchUser';
const UserChat = ({ chat, user }) => {

  const [recipientUser, setRecipientUser] = useState([]);
  const [error, setError] = useState(null);

  const recipientID = chat?.members.find((id) => id !== user?._id);

  console.log("Chats of the data", error,`${baseUrl}/users/find/${recipientID}`);

  useEffect(() => {
    const getUser = async () => {

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


  // const { recipentUser } = useFetchRecipientUser( chat, user);
  // console.log("Data's from mongoose ", chat, user, recipentUser?.name);
  // bg-[#585757] 
  return (
    <div className='flex gap-2 items-center p-2 rounded-sm border-b border-white cursor-pointer'>
      <div className='me-2 w-7'>
        <img src={avatarImg} alt="Avatar Image" />
      </div>
      <div className='flex flex-col relative'>
        <div className='flex justify-between gap-32'>
          <h2 className='font-semibold text-xl whitespace-nowrap'>{recipientUser?.name}{user?.name}</h2>
          <p className='text-gray-200 items-center flex'>12/12/2024</p>
        </div>
        <div className='flex justify-between gap-32'>
          <h4 className='whitespace-nowrap font-medium text-base'>Text Message from user</h4>
          <p className='bg-green-500 px-2 py-1 w-fit rounded-full '>3</p>
        </div>
        <p className='bg-green-500 ml-[320px] absolute flex items-start h-0 p-1 w-fit rounded-full'></p>
      </div>

    </div>

  )
}

export default UserChat

