import "dotenv/config";

let db = {
    bd: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host:process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT
}

if(process.env.NODE_ENV === 'test') {
    db = {
        bd: process.env.BD_TEST_DB,
        user: process.env.BD_TEST_USER,
        password: process.env.BD_TEST_PASSWORD,
        host:process.env.BD_TEST_HOST,
        port: process.env.BD_TEST_PORT
    }
} 

export default db