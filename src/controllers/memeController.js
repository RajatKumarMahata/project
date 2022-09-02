let axios = require("axios")




const memeHandler = async function (req, res) {
    try {


        let options = {
            method: "post",
            url: "https://api.imgflip.com/caption?template_id=181913649&text0=Functionup&text1=yesFunctionupiscool&username=rajat&password=rajat@1234"

        }
           
            let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data })
}

    catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}



module.exports.memeHandler = memeHandler;