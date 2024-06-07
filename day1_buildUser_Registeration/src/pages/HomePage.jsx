import { useLocation } from 'react-router-dom';

const HomePage = () => {

  const userData = useLocation();
  // console.log("Data from Login page", userData);

  return (
    <main className="w-full h-screen flex self-center place-content-center place-items-center">
      <div className="w-96 space-y-5 p-4 shadow-xl border rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className=''>
          <span className='text-lg font-bold'>User Name:&nbsp;</span>
          <span className='capitalize text-xl font-semibold'>{userData?.state.userName}</span>
        </div>
        <div className=''>
          <span className='text-lg font-bold'>Password:&nbsp;</span>
          <span className='capitalize text-xl font-semibold'>{userData?.state.password}</span>
        </div>
      </div>
    </main>
  )
}

export default HomePage