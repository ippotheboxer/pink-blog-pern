const db = require("../db");

// GET blogs
exports.getBlogs = async(req, res) => {
    try {
        const {rows} = await db.query("SELECT * FROM blog_data");
        return res.status(200).json({
            success: true,
            blogs: rows
        });
    } catch (error) {
        console.log("Error reading database: ", error);
    }
}

// POST a blog
exports.createBlog = async (req, res) => {
    const userBlogTitle= req.body.blog_title;
    const userBlogContent= req.body.blog_content;
    const username = req.body.username;
    try {
        await db.query("INSERT INTO blog_data (blog_title, blog_content, author_name) VALUES ($1, $2, $3)", [userBlogTitle, userBlogContent, username]);
        return res.status(201).json({
            success: true,
            message: 'Blog creation was successful.'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error.message
        })
    }
}

//GET blog by id
exports.getBlogByID = async (req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await db.query("SELECT * FROM blog_data WHERE blog_id = $1", [id]);
        if (rows.length === 0) {
            res.json("No blog with given ID exists.");
        } else {
            return res.status(200).json({
                success: true,
                blog: rows
            })
        }
    } catch (error) {
        console.log("Error getting blog with specified id: ", error);
    }
};

// Update a blog
exports.updateBlog = async (req,res) => {
    try {
        const {id} = req.params;
        const userBlogTitle= req.body.blog_title;
        const userBlogContent= req.body.blog_content;
        await db.query(`UPDATE blog_data SET blog_id=${id}, blog_title=$1, blog_content=$2 WHERE blog_id=${id}`, [userBlogTitle, userBlogContent]);
        return res.status(204).json({
            success: true,
            message: 'Blog successfully updated.'
        });
    } catch (error) {
        console.log("Error updating blog with specified id: ", error);
    }
};

// DELETE a blog
exports.deleteBlog = async (req, res) => {
    try {
        const {id} = req.params;
        await db.query("DELETE FROM blog_data WHERE blog_id=$1", [id]);
        return res.status(204).json({
            success: true,
            message: 'Blog successfully deleted.'
        });
    } catch (error) {
        console.log("Error deleting blog with specified id: ", error);
    }
};