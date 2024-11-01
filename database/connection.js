require('dotenv').config()
const mongoose = require('mongoose');

module.exports = () => {
    try {
        console.log(process.env.MONGO_ATLAS_URI);
        
        mongoose.connect(process.env.MONGO_ATLAS_URI)
        console.log("Connected Successfully...!")
    } catch (error) {
        console.log("Not Connected...!")
    }
}
