import express from "express";
import productRouters from './routes/productos.js'


export const app = express();

app.use(express.json())


//Productos

app.use("/products", productRouters)
