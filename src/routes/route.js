const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const bookController1 =require("../controllers/newController")


router.post("/createBook", bookController1.createBook1 )

router.get("/bookList", bookController1.bookList)

router.post("/getBooksInYear", bookController1.getBooksInYear)

router.get("/getParticularBooks", bookController1.getParticularBooks)

// router.get("/getXINRBooks",bookController1.getXINRBooks)

router.get("/getRandomBooks", bookController1.getRandomBooks)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)



module.exports = router;