import Prompt from "../components/Prompt";
import BlogForm from "../components/BlogForm";
import Layout from "../components/Layout";

function WriteBlog() {
    return (
    <Layout>
        <main className="gradient-background" style={{justifyContent: "start"}}>
            <div className="content">
                <h2 style={{paddingTop: "80px", paddingBottom: "40px"}} >Write blog</h2>
                <Prompt />
                <BlogForm/>
            </div>
        </main>
    </Layout>);
}

export default WriteBlog;