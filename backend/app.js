require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const {db} = require('./database/db')
db()
const recipeRouter = require('./routes/recipeRoutes')
const port = process.env.PORT || 9000

const app = express()
app.use(express.json())
app.use('/api',recipeRouter)



app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})