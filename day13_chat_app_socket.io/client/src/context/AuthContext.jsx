import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, postRequest } from "../utils/Services";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    //Register States
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerData, setRegisterData] = useState()
    const updateRegisterInfo = useCallback((info) => {
        setRegisterData(info);
    }, [])

    //Login States
    const [loginData, setLoginData] = useState({})
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const updateLoginInfo = useCallback((info) => {
        setLoginData(info);
    }, [])


    const registerUser = useCallback(async (e) => {
        e.preventDefault()
        setIsRegisterLoading(true);
        setRegisterError(null)

        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerData))
        if (response.error) {
            return setRegisterError(response);
        }
        setIsRegisterLoading(false);

        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
        console.log("Database user ", user);

    }, [registerData])

    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null)
    })

    const loginUser = useCallback(async (e) => {
        e.preventDefault()
        setIsLoginLoading(true)
        setLoginError(null)
        const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginData))
        setIsLoginLoading(false)

        if (response.error) {
            return setLoginError(response);
        }
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)
    }, [loginData])

    useEffect(() => {
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user))
    }, [])
    return <AuthContext.Provider value={{
        user, registerData, updateRegisterInfo, registerUser, registerError, isRegisterLoading, loginUser, updateLoginInfo, loginData, loginError, isLoginLoading, logoutUser
    }}>

        {children}
    </AuthContext.Provider>
}