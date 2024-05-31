const express = require("express");
const userRouter = express.Router();
const { addBlog, upload, getBlogs } = require("../controllers/blog");

userRouter.post("/add-blog", upload.single("coverImageUrl"), addBlog);
userRouter.get("/get-blog", getBlogs);
module.exports = userRouter;
