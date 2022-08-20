const {count} =require("console") 
 const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId =req.body.authorId
    let publisherId =req.body.publisherId
    if(!authorId){
        res.send({error:"plz enter author Id"})
    }


    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getAuthorData = async function (req, res) {
    let data =req.body
    let authorData=await authorModel.create (data)
    res.send({msg:authorData})
}


    const getpublisherData = async function (req, res) {
        let specificBook = await bookModel.find().populate('author_id').populate('publisherid')
        res.send({data: specificBook})

        const updateprice = async function(req,res)
        {
            let data =await authorModel.find({"rating":{$gt:3.5}}.select({_id:1}))
            let a =await bookModel.find({"author":data}).updateMany({$in:{price:10}})
       res.send({msg:a})
     }


}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getAuthorData = getAuthorData
module.exports.getpublisherData=getpublisherData