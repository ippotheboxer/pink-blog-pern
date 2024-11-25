import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = "http://localhost:5000/api";

export async function getBlogs() {
    return await axios.get(`${API_URL}/blogs`);
}

export async function getBlogByID(blog_id) {
    return await axios.get(`${API_URL}/blogs/${blog_id}`);
}

export async function createBlog(blogData) {
    return await axios.post(
        `${API_URL}/blogs`, 
        blogData
    );
}

export async function updateBlog(blogData, blog_id) {
    return await axios.patch(
        `${API_URL}/blogs/${blog_id}`, 
        blogData
    );
}

export async function deleteBlog(blog_id) {
    return await axios.delete(`${API_URL}/blogs/${blog_id}`);
}