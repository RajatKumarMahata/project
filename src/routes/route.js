const express = require('express');
const router = express.Router();
const abc = require('../logger/logger')
const bcd= require('../util/helper')
const def= require('../validator/formatter')

const lodash= require('lodash')


//Q1
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this

router.get('/sol1', function(req, res){
    const arr = [1,2,3,5,6,7]
    let n=arr[arr.length-1]
    let sum= n*(n+1)/2;
    let sum1= arr.reduce((a,b)=>a+b);

    let missingNumber=sum-sum1

    console.log("missing number : ", missingNumber)
    res.send("missing number is : "+ missingNumber )
})

//pritesh sir's solution 

// router.get("/sol1", function (req, res) {
//     //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr= [1,2,3,5,6,7]
  
//     let total = 0;
//     for (var i in arr) {
//         total += arr[i];
//     }
//     let lastDigit= arr.pop()
//     let consecutiveSum= lastDigit * (lastDigit+1) / 2
//     let missingNumber= consecutiveSum - total
  
//     console.log(  { data: missingNumber  }  )
//     res.send(  { data: missingNumber  }  );
//   });
 
  

//Q2
router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
        
    let sum=0
    let n=arr.length
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i]
    }
    let  missingNumber=((n+1)*(arr[0]+arr[n-1])/2)-sum

    console.log({data: missingNumber})
    res.send(  { data: missingNumber  }  );
});



//pritesh sir's sloution

// router.get("/sol2", function (req, res) {
//     //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//     let arr= [33, 34, 35, 37, 38]
//     let len= arr.length
  
//     let total = 0;
//     for (var i in arr) {
//         total += arr[i];
//     }
  
//     let firstDigit= arr[0]
//     let lastDigit= arr.pop()
//     let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
//     let missingNumber= consecutiveSum - total
   
//     console.log(  { data: missingNumber  }  )
//     res.send(  { data: missingNumber  }  );
//   });
 























// router.get('/test-me', function (req, res) {
//    abc.welMs()
//     bcd.printDate()
//    bcd.getBatchInfo()
//    def.xyz()
//   let months=['January','February','March','April','May','June','July','August','September','October',
// 'November','December']
// console.log("before chunck function --->",months)
// let result= lodash.chunk(months,4)
// console.log('after chunk function---->',result)

// let oddnums=[1,3,5,7,9,11,13,15,17,19]
//  let r1=lodash.tail(oddnums)
//  console.log("before tail function---->",oddnums)
//   console.log("after tail function---->",r1)

//   let arrnums= [2,6,3,2,2]
//   let r2=lodash.union(arrnums)
//   console.log("before union function--->")
//   console.log("after union function--->",r2)

//     let pairaar= [["horror" ,"The Shining"],["drama","Titanic"],["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
//     let r3= lodash.fromPairs(pairaar)
//     console.log("before fromPaairs function-->",pairaar)
//     console.log("after fromPaairs function-->",r3)
//     res.send('My second ever api!')


// });


// router.get('/test-you', function(req, res){
//     res.send('This is the second routes implementation')
// })

// router.get('/give-me-students-data',function(req, res){

// })
module.exports = router;
// adding this comment for no reason