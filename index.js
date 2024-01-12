import { createServer } from "http";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000; 
const server = createServer(app);   

server.listen(port,(response) => { 
    console.log(`server started at PORT ${port}!`)
})