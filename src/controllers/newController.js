const { count } = require("console")
const BookModel= require("../models/bookModels2")

const createBook1= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBooks= await BookModel.find().select({bookName:1,_id:0})
    res.send({msg: allBooks})
}
 
const getBooksInYear=async function(req,res){
    let booksInYear=await BookModel.find({year:2021}).count()
    res.send({msg:booksInYear})
}
const getParticularBooks=async function(req,res){
let particularBook= await BookModel.find({$and: [{bookName:/.*hi.*/},{year:2020}]},{bookName:1, authorName:1,
_id:0,year:1})
res.send({msg: particularBook})
}

// const getXINRBooks= async function(req,res){
//     let inr=await BookModel.find({$or:[rice.indianPrice},prices[{indianPrice:200}],prices[{indianPrice:500}]]},{bookName:1, authorName:1,
//         _id:0,prices:1})
//         res.send({msg:inr})
// }
const getRandomBooks = async function(req,res){
    let abc=await BookModel.find({$and:[{stockAvailable:true},{totalPages:500}]},{bookName:1,_id:0,
        totalPages:1,stockAvailable:1})
        res.send({msg:abc})
}

module.exports.createBook1=createBook1 
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
// module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks