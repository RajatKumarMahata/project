const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

const booksSchema = new mongoose.Schema( {
    bookName: "String",
     authorName:"String",
      category: {
        type:"String",
        enum:["Fantasy","Sci-Fi","Mystery","Thriller","Romance","Westerns","Dystopian","Contemporary"]
      },
     year:Number
}, { timestamps: true });

module.exports = mongoose.model('my-book', booksSchema) //users



// String, Number
// Boolean, Object/json, array