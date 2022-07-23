import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/"

export function peticionesAuth(funcion, params = {}) {
    try {
        if (!localStorage.getItem("refreshToken")) throw new Error("logOut")
        const refreshToken = `Bearer ${localStorage.getItem("refreshToken")}`
        axios.get("/auth/refresh", {
            headers: {
                "authorization": refreshToken
            }
        }).then((res) => {
            const { token } = res.data

            if (!Object.keys(params).length) {
                funcion(token)
            } else {
                funcion(token, params)

            }

        }).catch((err) => {
            console.log("error: ", err.response.data.message);

        });

    } catch (error) {
        console.log(error.message);
    }
}