import { useState, useEffect } from "react";
import { getBlogByID } from "../api/blog";
import BlogPost from "./blogPost";

export default function SpecificBlog(props) {
    const [blog, setBlog] = useState([]);
    const onLoad = async() => {
        try {
            const {data} = await getBlogByID(props.id);
            setBlog(data.blog[0]);
        } catch (error) {
            console.log("Error getting blogs");
        }
    }
    useEffect(() => {
        onLoad();
    }, []);

    return (
    <BlogPost 
    key={blog.blog_id} 
    id={blog.blog_id} 
    blogTitle={blog.blog_title} 
    blogContent={blog.blog_content} 
    dateCreated={blog.creation_date} 
    authorName={blog.author_name}
    />
    );
}