const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    author_id: String, 
    rating:number,
    price: number,
   
 }
    summary :  mongoose.Schema.Types.Mixed,
    isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
