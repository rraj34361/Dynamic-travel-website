const mongoose = require('mongoose')

const contact = mongoose.Schema({
    email:String,
    phone:String,
    query: String
},{timeStamp:true}
)



module.exports = mongoose.model('queries',contact)