import { createBlog } from "../api/blog";
import { useState } from "react";

const username = "sophie";

export default function BlogForm() {
    const [blogData, setBlogData] = useState({
        blog_title: '',
        blog_content: '',
        username: username
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            console.log(blogData);
            const {data} = await createBlog(blogData);
            setError('');
            setSuccess(data.message);
            setBlogData({
                blog_title: '',
                blog_content: '',
                username: username
            });
        } catch (error) {
            console.log(error.response.data.error);
            setError(error.response.data.error);
            setSuccess('');
        } 
    }

    const onChange = (e) => {
        setBlogData({...blogData, [e.target.name]: e.target.value});
      }

    return (
        <form onSubmit={onSubmitForm}>
        <label for="title">Title</label>
            <input 
            type="text" 
            name="blog_title" 
            value={blogData.blog_title} 
            onChange={(e) => onChange(e)}/>

        <label for="content">Content</label>
            <input 
            type="text" 
            name="blog_content" 
            value={blogData.blog_content} 
            onChange={(e) => onChange(e)}/>

            <input 
            type="hidden"
            name="username"
            value={blogData.username}
            />

            <div style={{ color: '#804554', margin: '10px 0' }}>{error}</div>
            <div style={{ color: '#78AA7F', margin: '10px 0' }}>{success}</div>
            
            <button className="post">Post</button>

        </form>
    )
}