function Blog(props) {
    return <div className="blog">
        <div className="blog-content">
    <h2>{props.blogTitle}</h2>
    <p>{props.blogContent}</p>
    <p>{props.authorName}</p>
    <p>{props.dateCreated}</p>
    </div>
    </div>
}

export default Blog;