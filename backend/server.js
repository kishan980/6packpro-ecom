const app =require("./app")
const dotenv =require("dotenv")
const databaseConnection = require("./config/database")
//config
dotenv.config({path:"../backend/config/config.env"})

//database connection   
databaseConnection()
app.listen(process.env.PORT,()=>{
    console.log(`Server is working http://localhost:${process.env.PORT}`)
})