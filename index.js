import express from "express";
import productRouters from './routes/productos.js'
import userRouters from './routes/users.js'


export const app = express();

app.use(express.json())


//Productos

app.use("/products", productRouters)

//Usuarios

app.use("/auth", userRouters)
