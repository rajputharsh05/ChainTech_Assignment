import express from "express"
import TaskRouter from "./routes/taskRoutes.js";

const app = express();


app.use(express.json(
    {
        limit: "16kb"        
    }
))

app.use( express.urlencoded( 
    {
        extended : true,
        limit : "16kb"         
    }
))


app.use("/api/v1/task",TaskRouter)


export default app