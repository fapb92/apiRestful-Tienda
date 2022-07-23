import cookieParser from "cookie-parser";
import express from "express";
import productRouters from './routes/productos.js'
import userRouters from './routes/users.js'
import cors from "cors"


export const app = express();

app.use(cors())

app.use(cookieParser())

app.use(express.json())


//Productos

app.use("/products", productRouters)

//Usuarios

app.use("/auth", userRouters)
