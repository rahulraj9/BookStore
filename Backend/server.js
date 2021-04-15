const express = require('express')
const app = express()
var bodyParser = require('body-parser')


const dotenv = require('dotenv')
dotenv.config();

const port = process.env.port

app.use(bodyParser.json())


const route = require('./routes/routes')
app.use('/', route)

app.use((error, req, res, next) => {
    let response = {
        success: false,
        message: "Internal Server Error",
        error: error
    }
    res.status(500).send(response);
})

app.get('/', (req, res) => {
    res.json("welcome to bookStore")
})

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
    require('./dbconfig/dbConnection')
})