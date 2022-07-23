import cookieParser from "cookie-parser";
import express from "express";
import productRouters from './routes/productos.js'
import userRouters from './routes/users.js'
import cors from "cors"


export const app = express();

const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2];

app.use(
    cors({
        origin: function (origin, callback) {
            if (whiteList.indexOf(origin) !== -1 || !origin) {
                return callback(null, origin);
            }
            return callback(
                "Error de CORS origin: " + origin + " No autorizado!"
            );
        },
        credentials: true,
    })
);

app.use(cookieParser())

app.use(express.json())


//Productos

app.use("/products", productRouters)

//Usuarios

app.use("/auth", userRouters)
