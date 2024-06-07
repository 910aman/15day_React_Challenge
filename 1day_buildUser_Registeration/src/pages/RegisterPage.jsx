import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = () => {

    const [registerData, setRegisterData] = useState();
    const [isRegistering, setIsRegistering] = useState(false);
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
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
    console.log("Data Registration", dataAxios);


    const MessagePass = () => {
        <div >
            {setMessage("🗹 Registered Successfully")}
            {setTimeout(() => {
                navigate({
                    pathname: "/thankYou",
                    state: { registerData: registerData }
                })
                localStorage.setItem('userInfo', JSON.stringify(registerData));
            }, 3000)}
        </div>
    }

    function validateForm() {

        if (registerData?.userName === "" || registerData?.email === "" || registerData?.password === "") {
            return setMessage("☒ Please Fill up all the fields")
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(registerData?.email)) {
            return setMessage("☒ Enter proper format of Email")
        }
        else if (registerData?.userName === dataAxios.data.username) {
            MessagePass()
        }
    }

    const onSubmitRegister = (e) => {
        try {
            e.preventDefault()
            console.log("Registeration Data", registerData,);
            setIsRegistering(false)
            axios.post('https://dummyjson.com/auth/login', {
                username: registerData?.userName,
                password: registerData?.password
            }).then((res) => {
                // console.log(res);
                setDataAxios(res)
    
            }).catch((error) => {
                setMessage("☒ Please Check Axios Error"); navigate("/register")
                // setMessage(error)
    
                // console.log(error);
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleRegister = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value })
    }




    return (
        <main className="w-full h-screen flex self-center place-content-center place-items-center">


            <div className="w-96 space-y-5 p-4 shadow-xl border rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                {/* <img src={"https://img.freepik.com/premium-photo/top-view-open-magazine-page-with-copy-space-classic-blue-table_93675-78020.jpg?w=1380"} alt="Background" /> */}
                <>
                    <div className="text-center ">
                        <div className="my-1">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Checking User Registered </h3>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={onSubmitRegister}>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-white font-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        required
                                        placeholder='Jhon Doe'
                                        className="px-4 border-2 w-full bg-gray-200 appearance-none border-gray-200 rounded-lg py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        value={registerData?.email} onChange={handleRegister}
                                    // className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:indigo-600 shadow-sm rounded-lg transition duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-white font-bold">
                                        UserName
                                    </label>
                                    <input
                                        type="text"
                                        name='userName'
                                        placeholder='jhondoe@gmail.com'
                                        required
                                        value={registerData?.userName} onChange={handleRegister}
                                        className="px-4 border-2 w-full bg-gray-200 appearance-none border-gray-200 rounded-lg py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-white font-bold">
                                        Password
                                    </label>
                                    <input
                                        disabled={isRegistering}
                                        type="password"
                                        name="password"
                                        autoComplete='password'
                                        placeholder='Jhon@123'
                                        required
                                        value={registerData?.password} onChange={handleRegister}
                                        className="px-4 border-2 w-full bg-gray-200 appearance-none border-gray-200 rounded-lg py-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    />
                                </div>
                                <span className={`py-2 font-bold text-lg ${message === "🗹 Registered Successfully" ? 'text-green-500 ' : 'text-red-500'}`} >{message}</span>
                                <button
                                    type="submit"
                                    onClick={validateForm}
                                    disabled={isRegistering}
                                    className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                                >
                                    {isRegistering ? 'Signing Up...' : 'Sign Up'}
                                </button>
                                <div className="text-sm text-center">
                                    Already have an account? {'   '}
                                    <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
                                </div>
                            </div>
                        </form>
                    </div>

                    {message === "🗹 Registered Successfully" &&
                        <div className='font-medium text-xl py-4 px-2 duration-200'>
                            <div>Name: {registerData?.userName}</div>
                            <div>Email: {registerData?.email}</div>
                            <div>Password: {registerData?.password}</div>
                        </div>
                    }
                </>
            </div>
        </main>

    )
}

export default RegisterPage