function Blog(props) {
    return (<div className="blog">
        <div className="blog-content">
    <h2 className="blogTitle">{props.blogTitle}</h2>
        <div className="blogBody">
            <p>{props.blogContent}</p>
            <p>{props.authorName}</p>
            <p>{props.dateCreated}</p>
        </div>
    </div>
    </div>);
}

export default Blog;