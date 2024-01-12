import express from "express";
import morgan from "morgan";
import pkg from 'body-parser';
import cors from 'cors';
import connection from './DB/connection.js';
import route from './route/TodoRoute.js';
const { urlencoded, json } = pkg;
const con = connection()
con.then((response) => {
    console.log("Connected")
}).catch((error) => {
    console.log(error)
})

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({})
    }
    next()
})


app.use(urlencoded({extended:false}))
app.use(json());
app.use(morgan('dev'))

app.use('/todo',route)


export default app;