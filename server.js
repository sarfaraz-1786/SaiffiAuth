require("dotenv").config({path:"./config.env"})
const express  = require('express')
const connectDb = require('./config/db')
const app = express()


//connect DB
connectDb();

app.use(express.json()) // so that we get res.json in routes controllersasdasd.


app.use('/api/auth', require('./routes/AuthRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))