const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String , 
    authorName: String, 
    tags: [String],
    year: {type:Number, default:2021} ,
    prices: {
        indianPrice: String,
        europianPrice: String,
    },
    totalPages: Number,
    stockAvailable:Boolean

}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema)