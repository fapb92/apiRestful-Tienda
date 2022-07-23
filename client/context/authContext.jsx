import axios from "axios";
import { useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

axios.defaults.baseURL = "http://localhost:5000/"

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    const login = (email, password) => {
        axios.post("/auth/login", {
            email,
            password
        }
        ).then((res) => {
            console.log(res.status);
            console.log(res.data);
        }).catch((err) => {
            console.log(err.response);
        });
        console.log(respuesta)
        return respuesta
    }


    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>

    )
}
