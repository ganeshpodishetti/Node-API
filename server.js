require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose'); 
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors')
const app = express();

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

var corsOptions = {
    origin: ['http://example.com'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// cross origin allow front end access
app.use(cors(corsOptions))

// MiddleWares
app.use(express.json())

// To accept form data in postman request
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/products', productRoute)

app.get('/', (req, res) => {
    res.send('Hello Node API')
})

app.use(errorMiddleware)

//DB Connection
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log("connected to mongodb")
    app.listen(PORT, () => {
        console.log(`Node API running on ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})