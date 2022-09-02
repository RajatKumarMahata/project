let axios = require("axios")



let getSortedCities=async function(req,res) {

    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[ ]
        for(i=0;i<cities.length;i++){
        let obj= { city: cities[i] }
        let res= await axios.get('http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c5a07a5f1ba8b10f0e5cb28b018f097a' )
        console.log(res.data.main.temp)
        obj.temp=res.data.main.temp
        cityObjArray.push(obj)
        }
        let sorted=cityObjArray.sort( function(a,b) {return a.temp -b.temp})
        console.log(sorted)
        res.status(200).send({status:true,data:sorted})






    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
    
    
    
    module.exports.getSortedCities = getSortedCities;
    









}
