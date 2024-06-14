import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Login = () => {

  const { loginUser,  updateLoginInfo, loginData, isLoginLoading } = useContext(AuthContext);

  const handleSubmit = (event) => {
    const { name, value } = event.target;
    updateLoginInfo({ ...loginData, [name]: value })
  }




  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onClick={loginUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6  ">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={loginData?.email}
                onChange={handleSubmit}
                type="email"
                placeholder='Enter your Email ID'
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-800 text-lg px-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6  ">
                Password
              </label>
              <div className="text-sm">
                <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="text"
                value={loginData?.password}
                onChange={handleSubmit}
                placeholder='Enter your Password'
                required
                className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 text-lg shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            {/* {loginError?.error &&
              <div className='h-10 bg-gray-600 mb-1 rounded-md transition-transform ease-linear duration-300 animate-pulse '>
                <h2 className='font-semibold text-lg text-white'>{loginError?.error}</h2>
              </div>
            } */}

            <Link to={"#"}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              {/* {isLoginLoading ? "Sign in" : "Signing in"} */}
              </button>
            </Link>
          </div>

        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login