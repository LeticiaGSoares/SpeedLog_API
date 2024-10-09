import "dotenv/config";
import { Sequelize } from "sequelize";
import db from "./databases.js";

const conn = new Sequelize(
    db.bd, 
    db.user, 
    db.password, 
    {
    host: db.host,
    dialect: "mysql"
    }
)

try{
    await conn.authenticate();
    console.log("Connection MYSQL")
}catch(error){
    console.error("Error: ", error)
}

export default conn;