const express = require('express')
const app = express()
const connectDb = require('./configs/db')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const todoRoutes = require("./routes/todoRoutes")
const cors = require('cors')
app.use(express.json())

dotenv.config()
connectDb()

const PORT = process.env.PORT || 5000
app.use(cors())


app.use("/", userRoutes)
app.use("/", todoRoutes)


mongoose.connection.once('open', () => {

    console.log('connected to mongodb database')

    app.listen(PORT,() => console.log(`server running on port ${PORT}`))

})