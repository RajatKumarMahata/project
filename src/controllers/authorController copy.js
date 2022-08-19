const UserModel= require("../models/userModel")

const createauthor= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getauthorData= async function (req, res) {
    let allauthor= await authorModel.find()
    res.send({msg: allathors})
}

module.exports.createUser= createauthor
module.exports.getauthorData= getauthorsData