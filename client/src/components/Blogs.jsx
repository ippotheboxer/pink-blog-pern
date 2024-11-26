import {useState, useEffect} from "react";
import Blog from "./Blog"
import { getBlogs } from "../api/blog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    const onLoad = async() => {
        try {
            const {data} = await getBlogs();
            setBlogs(data.blogs)
        } catch (error) {
            console.log("Error getting blogs");
        }
    }
    useEffect(() => {
        onLoad();
    }, []);
    

    return ( <div>
        {blogs.map((blog) => (
            <Blog key={blog.blog_id} 
            id={blog.blog_id} 
            blogTitle={blog.blog_title} 
            blogContent={blog.blog_content} 
            dateCreated={blog.creation_date} 
            authorName={blog.author_name}/>
            ))}
        </div>
    );
}