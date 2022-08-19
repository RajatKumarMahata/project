const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_Name: String,
    author_id:Number,
    address:String,
    age: Number,
    
}, { timestamps: true });

module.exports = mongoose.model('author', authorSchema) //users



// String, Number
// Boolean, Object/json, array