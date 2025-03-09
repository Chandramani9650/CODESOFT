require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const {mongoDB} = require('./db.config')
const path = require('path')
const fs = require('fs')

const {authRouter} = require('./src/routes/authRoutes')

const {userRoute} = require('./src/routes/userRoutes')

const app = express()
app.use(express.json())
app.use(morgan('combined'))
app.use('/auth', authRouter);
app.use('/users', userRoute)

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('here is your log data')
})
app.listen(process.env.PORT, ()=>{
    mongoDB()
    console.log("server is running on port 8085");
    
})