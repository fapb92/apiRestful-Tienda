import axios from "axios";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { peticionesAuth } from "../utils/peticionesAuth";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

axios.defaults.baseURL = "http://localhost:5000/"

export const AuthProvider = ({ children }) => {
    const [Auth, setAuth] = useState({ auth: false, info: {} })

    function getInfoUser(token) {
        axios.get("/auth/user", {
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then((res) => {
            const { id, nombres, email, rol } = res.data;
            if (!Auth.auth) {
                setAuth({ auth: true, info: { id, nombres, email, rol } });
            }
        }).catch((err) => {
            console.log(err.response);
        });
    }

    const registro = (nombres, email, password) => {
        axios.put("/auth/registrar", {
            nombres,
            email,
            password
        }
        ).then((res) => {
            const { token, refreshToken } = res.data
            window.localStorage.setItem("refreshToken", refreshToken)

            getInfoUser(token);

        }).catch((err) => {
            console.log(err.response);
        });
        return
    }

    const login = (email, password) => {
        axios.post("/auth/login", {
            email,
            password
        }
        ).then((res) => {
            const { token, refreshToken } = res.data
            window.localStorage.setItem("refreshToken", refreshToken)

            getInfoUser(token)

        }).catch((err) => {
            console.log(err.response);
        });
        return
    }

    const logOut = () => {
        window.localStorage.removeItem("refreshToken")
        setAuth({ auth: false, info: {} })
        location.reload()
    }



    useEffect(() => {
        peticionesAuth(getInfoUser)
    }, [])


    return (
        <AuthContext.Provider value={{ login, logOut, Auth, registro }}>
            {children}
        </AuthContext.Provider>

    )
}
