import dotenv from "dotenv"
import ConnectToDataBase from "./database/database.js"
import app from "./app.js"

dotenv.config({
    path : "./.env"
})


ConnectToDataBase().then( () => {

    app.listen(process.env.PORT, () => {
        console.log("Server is running on port ", process.env.PORT)
    })
    
}).catch((error) => {
    console.log(error)
}) 
