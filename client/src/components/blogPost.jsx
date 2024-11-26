export default function BlogPost(props) {
    return (
    <div className="blogPost">
        <div className="blog-content">
        <h2>{props.blogTitle}</h2>
        <p>{props.blogContent}</p>
        <p className="authorText">Written by {props.authorName}</p>
        <p>{props.dateCreated}</p>
        </div>
    </div> );
}