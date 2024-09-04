require('dotenv').config();
const mongoose = require('mongoose')
mongoose.set("strictQuery",false)

exports.db = () =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database connected successfully")
    }).catch((error)=>{
        console.log(error)
        console.log("Database not connected")
    })
} 