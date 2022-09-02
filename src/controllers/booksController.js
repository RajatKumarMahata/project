const { count } = require("console")
const newBookModels= require("../models/newBookModles.js")
const author=require("../models/author.js");

const authorData= async (req,res)=>{
    let allAuthorData= await author.create(req.body)
    res.send({authorData: allAuthorData})
}

/////////////////////////////////////////////////////////////////////
const sendBookData=async (req,res)=>{
    let allBooksData= await newBookModels.create(req.body)
    res.send({"All Books":allBooksData})
}
////////////////////////////////////////////////////////////////////
const bookBychetanBhagat= async(req,res)=>{
    let Cbooks=await newBookModels.find({author_name: "Chetan Bhagat"}).select({_id:0,author_id1:1})
    let innArr=Cbooks[0]
    let Cbooks2=await newBookModels.find(innArr).select({name:1,_id:0})
    res.send({"Books by Chethan Bhagat": Cbooks2})
}
///////////////////////////////////////////////////////////////////////
const updateBooks= async  (req, res)=> {
   
    let allBooks= await newBookModels.findOneAndUpdate( 
        {name:"Two States"},
    {$set:{ price: 100,author_id1:1}},
    { new: true , upsert: true} ,
 ).select({name:1,price:1,_id:0,author_id1:1})

 let AuthorName=await author.find({author_id1:author.author_id}).select({author_id:1,author_name:1, _id:0})
 res.send( { "book name": allBooks,msg:AuthorName[0] })
}
///////////////////////////////////////////////////////  
const bookprice=async (req,res)=>{
    let bookonPrice= await newBookModels.find({$gte:50,$lte:100}).select({name:1,author_id1:1, _id:0,price:1 })
    let b=bookonPrice.map(x=>x.author_id1);
    let newauthorname1=await author.find({author_id:b}).select({author_name:1,author_id:1,_id:0})
    res.send({"Books & its price":bookonPrice,"Author Names":newauthorname1})
}  

module.exports.authorData=authorData
module.exports.sendBooksData=sendBookData
module.exports.bookBychetanBhagat=bookBychetanBhagat
module.exports.updateBooks=updateBooks
module.exports.bookprice=bookprice
