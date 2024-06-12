import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Register = () => {

  const { registerData, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);

  // const onSubmitRegister = (e) => {
  //   e.preventDefault();
  //   console.log("Registered Data from Mongo",registerData);
  // }

  const handleSubmit = (event) => {
    const { name, value } = event.target;
    updateRegisterInfo({ ...registerData, [name]: value })
    console.log("Error", registerError.message);
  }




  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=700"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  ">
          Sign up to your new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onClick={registerUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6  ">
              Username
            </label>
            <div className="mt-2">
              <input
                required
                name="name"
                type="text"
                placeholder='Enter your Username'
                value={registerData?.name}
                onChange={handleSubmit}
                className="block w-full rounded-md border-0 py-1.5 text-gray-800 text-lg px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6  ">
              Email address
            </label>
            <div className="mt-2">
              <input
                required
                name="email"
                type="email"
                value={registerData?.email}
                onChange={handleSubmit}
                placeholder='Enter your Email ID'
                className="block w-full rounded-md border-0 py-1.5 text-gray-800 text-lg px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6  ">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                required
                name="password"
                type="text"
                value={registerData?.password}
                onChange={handleSubmit}
                placeholder='Enter your Password'
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <Link to={"#"}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {isRegisterLoading ? "Creating a New Account" : "Sign up"}
              </button>
            </Link>
          </div>

        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register