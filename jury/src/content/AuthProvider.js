import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    // setAuth({ refreshToken: localStorage.getItem("refreshToken"), accessToken: localStorage.getItem("accessToken"), roles: localStorage.getItem("roles"), user_id: localStorage.getItem("user_ids"), user: localStorage.getItem("user"), pwd: localStorage.getItem("pwd") })
    console.log(auth)
    // localStorage.setItem('user_id', auth.user_id)
    

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;