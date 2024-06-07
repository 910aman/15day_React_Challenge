import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const [loginData, setLoginData] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState()
  const [dataAxios, setDataAxios] = useState()


  useEffect(() => {
    axios.get("http://dummyjson.com/users").
      then((res) => {
        setDataAxios(res);
      }).
      catch((err) => {
        setMessage("Axios Error while Calling All users")
      })
  }, [])
  const navigate = useNavigate();

  const MessagePass = () => {
    <div >
      {setMessage("🗹 Login Successfully")}
      {setTimeout(() => {
        navigate("/home", { state: loginData })

        localStorage.setItem('userInfo', JSON.stringify(loginData));
      }, 3000)}
    </div>
  }

  function validateForm() {

    if (loginData?.userName === "" || loginData?.password === "") {
      return setMessage("☒ Please Fill up all the fields")
    }

    else if (loginData?.userName === dataAxios.data.username) {
      console.log("Success mili");
      MessagePass()
    }
  }

  const onSubmitLogin = (e) => {
    try {
      e.preventDefault()
      
      setIsLogin(false)
      axios.post('https://dummyjson.com/auth/login', {
        username: loginData?.userName,
        password: loginData?.password
      }).then((res) => {
        setDataAxios(res)
        console.log("Login Details Data", loginData,res);
      }).catch((error) => {
        setMessage("Axios Error")
      })
    }
    catch (error) {
      setMessage("☒ Please Check Axios Error")
      // console.log(error);
    }
  }


  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value })
  }




  return (


    <main className="w-full h-screen flex self-center place-content-center place-items-center">
      <div className="w-96 space-y-5 p-4 shadow-xl border rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">

        <div className="text-center ">
          <div className="my-1">
            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Checking User Logined </h3>
          </div>
        </div><form onSubmit={onSubmitLogin}>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-white font-bold">
                UserName
              </label>
              <input
                type="text"
                name='userName'
                placeholder='jhondoe@gmail.com'
                required
                value={loginData?.userName} onChange={handleLogin}
                className="px-4 border-2 w-full bg-gray-200 appearance-none border-gray-200 rounded-lg py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div>
              <label className="text-sm text-white font-bold">
                Password
              </label>
              <input
                disabled={isLogin}
                type="password"
                name="password"
                autoComplete='password'
                placeholder='Jhon@123'
                required
                value={loginData?.password} onChange={handleLogin}
                className="px-4 border-2 w-full bg-gray-200 appearance-none border-gray-200 rounded-lg py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>
            <span className={`py-2 font-bold text-lg ${message === "🗹 Login Successfully" ? 'text-green-500 ' : 'text-red-500'}`} >{message}</span>

            <button
              type="submit"
              onClick={validateForm}
              disabled={isLogin}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isLogin ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
            >
              {isLogin ? 'Signing In...' : 'Sign In'}
            </button>
            <div className="text-sm text-center">
              Create new Account&nbsp;
              <Link to={'/register'} state={loginData} className="text-center text-sm hover:underline font-bold">Register</Link>
            </div>
          </div>
        </form>
        {message === "🗹 Registered Successfully" &&
          <div className='font-medium text-xl py-4 px-2 duration-200'>

            <div>Email: {loginData?.userName}</div>
            <div>Password: {loginData?.password}</div>
          </div>
        }
      </div>
    </main>

  )
}

export default LoginPage