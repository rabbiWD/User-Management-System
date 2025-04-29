
import express from "express";
 
import { PORT } from "./src/config/config.js";
 
import { router } from "./src/routes/api.js";
 

const app = express()
 
app.use(express.json())
 


app.use("/api/v1", router)
 

app.listen(PORT, ()=>{

   console.log("Server listen successfully Port",PORT)

});