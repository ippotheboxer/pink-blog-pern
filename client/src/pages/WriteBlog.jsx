import React, {useState} from "react";

function WriteBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {blog_title:title, blog_content:content};
            const response = await fetch("http://localhost:5000/blogs", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/view";
        } catch (error) {
            console.log(error);
        } 
    
    }

    return <main className="gradient-background">
    <div className="content">
        <h2>Write blog</h2>

        <form onSubmit={onSubmitForm}>
        <label for="title">Title</label>
            <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
        <label for="content">Content</label>
            <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)}/>
            <button>Post</button>
        </form>

        </div>
    </main>
}

export default WriteBlog;