import express from "express";
import cors from "cors";
import pool from "./db.js"

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

//Routes
const currentUserId = 1;

// Get blogs
app.get("/blogs", async (req, res) => {
    try {
        const allBlogs = await pool.query("SELECT * FROM blog_data");
        res.json(allBlogs.rows);
    } catch (error) {
        console.log("Error reading database: ", error);
    }
});

// Create a blog
app.post("/blogs", async (req, res) => {
    const userBlogTitle= req.body.blog_title;
    const userBlogContent= req.body.blog_content;
    try {
        const newBlog = await pool.query("INSERT INTO blog_data (blog_title, blog_content, author_id) VALUES ($1, $2, $3) RETURNING *", [userBlogTitle, userBlogContent, currentUserId]);
        res.json(newBlog.rows[0]);
    } catch (error) {
        console.log("Error adding into database: ", error);
    }
});

//Get a specific blog
app.get("/blogs/:id",  async (req, res) => {
    try {
        const {id} = req.params;
        const specificBlog = await pool.query("SELECT * FROM blog_data WHERE blog_id = $1", [id]);
        if (specificBlog.rows.length === 0) {
            res.json("No blog with given ID exists.");
        } else {
            res.json(specificBlog.rows[0]);
        }
    } catch (error) {
        console.log("Error getting blog with specified id: ", error);
    }
});

// Update a blog
app.patch("/blogs/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const userBlogTitle= req.body.blog_title;
        const userBlogContent= req.body.blog_content;
        const updatedBlog = await pool.query(`UPDATE blog_data SET blog_id=${id}, blog_title=$1, blog_content=$2 WHERE blog_id=${id}`, [userBlogTitle, userBlogContent]);
        res.json("Todo was updated.");
    } catch (error) {
        console.log("Error updating blog with specified id: ", error);
    }
});

// Delete a blog
app.delete("/blogs/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query("DELETE FROM blog_data WHERE blog_id=$1", [id]);
        res.json("Blog was deleted.");
    } catch (error) {
        console.log("Error deleting blog with specified id: ", error);
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });