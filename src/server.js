import express from "express"
import cors from "cors"
import "dotenv/config"

const PORT = process.env.PORT
const app = express()
app.use("/", (req, res)=>{
    res.status(200).json({message: "Server rodando"})
})

app.use("*", (req, res)=> {
    res.status(404).json({message: "Rota não encontrada"})
})

app.listen(PORT)