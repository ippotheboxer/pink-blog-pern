import { deleteBlog } from "../api/blog";
import { useParams } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

export default function BlogPost(props) {
    const { id } = useParams();
    const deleteCurrentBlog = async() => {
        try {
            await deleteBlog(id);
            window.location = "/view";
        } catch (error) {
            console.log("Error deleting current blog");   
        }
    }

    return (
    <div className="blogPost">
        <div className="blog-content post-content">
        <h2>{props.blogTitle}</h2>
        <p>{props.blogContent}</p>
        <p className="authorText">Written by {props.authorName}</p>
        <p>{props.dateCreated}</p>
        <div className="blogActionContainer">
            <button className="post blog-action edit">
                <FaPencilAlt className="icon editIcon" />
                Edit
                </button>
            <button className="post blog-action delete" onClick={deleteCurrentBlog}>
                <FaTrashAlt className="icon deleteIcon" /> 
                Delete
            </button>
        </div>
        </div>
    </div> );
}