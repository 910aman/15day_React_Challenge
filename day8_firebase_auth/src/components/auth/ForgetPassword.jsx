import React, { useState } from 'react'
import { doPasswordReset } from '../../firebase/auth';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

    const [isSigningIn, setIsSigningIn] = useState(false)

    const [email, setEmail] = useState('');
    const onSubmit = () => {
        setIsSigningIn(true)
        doPasswordReset(email);
    }



    return (
        <main className="w-full h-screen flex self-center place-content-center place-items-center flex-row bg-gray-100">
            <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl bg-zinc-100">
                <div className="text-center">
                    <div className="mt-2">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Forgot Password </h3>
                    </div>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="space-y-5"
                >
                    <div>
                        <label className="text-sm text-gray-600 font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete='email'
                            required
                            value={email} onChange={(e) => { setEmail(e.target.value) }}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border  bg-zinc-300 focus:bg-white focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                        />
                    </div>
                    <Link className='text-blue-500 mt-0 text-base hover:underline focus:underline focus:text-blue-600' to={"/login"}>
                        <p>Back to Login?</p>
                    </Link>

                    <button
                        type="submit"

                        className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                    >
                        {isSigningIn ? 'Senting Link...' : 'Reset Password'}
                    </button>

                </form>
            </div>
        </main>
    )
}

export default ForgetPassword