const express = require('express')
const app = express()

app.use(express.json())

//Route Import 
const products = require('./routes/productRoute')
const users = require('./routes/userRoutes')

//Middleware : 
// app.use(Errorhandler)

app.use('/api', products)
app.use('/api', users)

module.exports = app