import React, {useState, useEffect} from "react";
import Blog from "./Blog";
function ListBlogs() {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async() => {
        try {
            const response = await fetch("http://localhost:5000/blogs")
            const jsonData = await response.json();
            console.log(jsonData);
            setBlogs(jsonData);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBlogs();
    }, []);

    return (<main className="gradient-background">
        <div className="content">
        <h2>View blogs</h2>
        {blogs.map((blog) => (
            <Blog key={blog.blog_id} id={blog.blog_id} blogTitle={blog.blog_title} blogContent={blog.blog_content} dateCreated={blog.creation_date} authorName={blog.author_id}/>
        ))}
        </div>
        </main>
    );
}

export default ListBlogs;

