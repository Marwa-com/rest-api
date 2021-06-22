let mongoose = require('mongoose')
const Schema= mongoose.Schema

const Userschéma = new Schema({
    firstname: String,
    lastname: String,
    age: Number   
})
module.exports=mongoose.model('user', Userschéma)