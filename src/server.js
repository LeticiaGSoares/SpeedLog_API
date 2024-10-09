import express from "express"
import cors from "cors"
import "dotenv/config"

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

import routers from "./routers.js"

app.use("/", routers)

app.use("*", (req, res)=> {
    res.status(404).json({message: "Rota não encontrada"})
})

app.listen(PORT)