
import avatarImg from '../../assets/avatar.svg';
import { useDataFetchUser } from '../../hooks/useDataFetchUser';
// import { useDataFetchUser } from '../../hooks/useDataFetchUser';
const UserChat = ({ chat, user }) => {

  const { recipentUser } = useDataFetchUser( chat, user);

  // console.log("Data's from mongoose ", chat, user, recipentUser?.name);
  // bg-[#585757] 
  return (
    <div className='flex gap-2 items-center p-2 rounded-sm border-b border-white cursor-pointer'>
      <div className='me-2 w-7'>
        <img src={avatarImg} alt="Avatar Image" />
      </div>
      <div className='flex flex-col relative'>
        <div className='flex justify-between gap-32'>
          <h2 className='font-semibold text-xl whitespace-nowrap'>{recipentUser?.name}{user?.name}</h2>
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

