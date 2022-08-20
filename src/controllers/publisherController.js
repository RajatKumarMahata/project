const publisherModel= require("../models/authorModel")

const createpublisher= async function (req, res) {
    let author = req.body
    let publisherCreated = await publisherModel.create(author)
    res.send({data: publisherCreated})
}

const getpublisherData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}

module.exports.createAuthor= createpublisher
module.exports.getAuthorsData= getpublisherData