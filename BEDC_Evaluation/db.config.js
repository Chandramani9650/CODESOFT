const mongoose = require('mongoose')

require('dotenv').config()
const mongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.URL)
        console.log("connected to database");
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {mongoDB}