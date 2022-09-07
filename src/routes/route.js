const express = require('express');
const router = express.Router();
const authorController= require('../controller/authorController')
const BlogsController= require('../controller/BlogsController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 


router.post("/authors", authorController.createAuthor)
router.get("/blog",BlogsController.getBlogs)
router.post("/Blogs", BlogsController.createBlogs)        
router.put("/blogs/:blogId", BlogsController.updateBlog)
router.delete("/blogs/:blogId", BlogsController.deleteBlogs)
router.delete("/blog",BlogsController.deletebyquery)
module.exports = router;