const {Router} = require("express");
const { getBlogs, createBlog, getBlogByID, updateBlog, deleteBlog } = require("../controllers/blogs");

const router = Router();

router.get("/blogs", getBlogs);
router.post("/blogs", createBlog);
router.get("/blogs/:id", getBlogByID);
router.patch("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

module.exports = router;