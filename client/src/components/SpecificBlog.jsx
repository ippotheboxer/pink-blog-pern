import React from "react";

const SpecificBlog = async(props) => {
    try {
        const response = await fetch(`http://localhost:5000/blogs/${props.id}`);
        window.location = `/blogs/${props.id}`;
    } catch (error) {
        console.log("Error getting blog with specific ID.");
    }
}

export default SpecificBlog;