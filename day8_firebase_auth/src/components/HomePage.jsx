import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { doPasswordChange, doSendEmailVerification } from '../firebase/auth'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Home = () => {
    const { currentUser } = useAuth()

    const [isPassword, setIsPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState();
    const [onClickPassword, setOnClickPassword] = useState(false);
    const [password, setPassword] = useState()
    const [passMessage, setPassMessage] = useState('');


    const EmailVerification = () => {
        try {
            if (!isPassword) {
                setIsPassword(true)
                doSendEmailVerification()
            }
            // console.log("data", errorMessage, isSigningIn, currentUser.password);
        } catch (error) {
            setErrorMessage(error)
            console.log(error);
        }
    }

    const PasswordChangeLink = () => {
        setIsPassword(true)
    }
    const onCloseBtn = () => {
        setIsPassword(false)
    }

    const onSubmit = () => {
        try {
            if (currentUser) {
                setOnClickPassword(true)
                doPasswordChange(password)
                console.log(passMessage);
            }
            setTimeout(() => {
                setPassMessage("Successfully Password Changed")
            }, [2000])
        } catch (err) {
            setErrorMessage(err);
            console.log(err);
        }
    }



    return (
        <>
            <div className='text-2xl font-bold pt-14 ml-4'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div>
            {passMessage && <div>{passMessage}</div>}
            {currentUser && (
                <div className='flex gap-5 '>

                    <button className='px-4 py-2 text-white font-medium rounded-lg bg-green-600 mt-2 hover:bg-green-700 ml-4' onClick={() => PasswordChangeLink()}>Password Change Link</button>
                    <button className='px-4 py-2 text-white font-medium rounded-lg bg-green-600 mt-2 hover:bg-green-700' onClick={() => EmailVerification()}>Email Verification</button>

                </div>
            )}
            {isPassword &&
                <div className="w-96 text-gray-600 space-y-5 ml-4 mt-2 p-4 shadow-xl border rounded-xl bg-zinc-100">
                    <div className='relative' >
                        <Link onClick={onCloseBtn} className={`absolute mt-0 top-0 right-1 cursor-pointer  rounded-full ${isPassword ? 'bg-gray-100 hover:text-white p-1 hover:bg-gray-500 hover:shadow-xl transition duration-300' : 'bg-gray-300 cursor-not-allowed'}`}>
                            <RxCross1 />
                        </Link>
                    </div>
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Change your Password </h3>
                        </div>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Password
                            </label>
                            <input
                                type="password"
                                autoComplete='password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border  bg-zinc-300 focus:bg-white focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${onClickPassword ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}>

                            {onClickPassword ? 'Changing Password...' : 'Change Pwd'}
                        </button>
                    </form>
                </div>}
            {errorMessage && (
                <span className='text-red-600 font-bold'>{errorMessage}</span>
            )}

        </>
    )
}

export default Home
