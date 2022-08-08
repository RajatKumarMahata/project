const express = require('express');
const router = express.Router();
const abc = require('../logger/logger')
const bcd= require('../util/helper')
const def= require('../validator/formatter')

const lodash= require('lodash')


router.get('/test-me', function (req, res) {
   abc.welMs()
    bcd.printDate()
   bcd.getBatchInfo()
   def.xyz()
  let months=['January','February','March','April','May','June','July','August','September','October',
'November','December']
console.log("before chunck function --->",months)
let result= lodash.chunk(months,4)
console.log('after chunk function---->',result)

let oddnums=[1,3,5,7,9,11,13,15,17,19]
 let r1=lodash.tail(oddnums)
 console.log("before tail function---->",oddnums)
  console.log("after tail function---->",r1)

  let arrnums= [2,6,3,2,2]
  let r2=lodash.union(arrnums)
  console.log("before union function--->")
  console.log("after union function--->",r2)

    let pairaar= [["horror" ,"The Shining"],["drama","Titanic"],["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
    let r3= lodash.fromPairs(pairaar)
    console.log("before fromPaairs function-->",pairaar)
    console.log("after fromPaairs function-->",r3)
    res.send('My second ever api!')


});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason