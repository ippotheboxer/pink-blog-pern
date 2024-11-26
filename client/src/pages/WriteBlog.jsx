import Prompt from "../components/Prompt";
import BlogForm from "../components/BlogForm";

function WriteBlog() {
    return <main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
        <h2 style={{paddingTop: "80px", paddingBottom: "40px"}} >Write blog</h2>
        <Prompt />
        <BlogForm />
        </div>
    </main>
}

export default WriteBlog;