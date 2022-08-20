const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    }, 
    price: Number,
    ratings: Number,
    publisherid:{
        type:ObjectId,
        ref:"publisher"
    },
    isHardcover:{
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook1', bookSchema)
