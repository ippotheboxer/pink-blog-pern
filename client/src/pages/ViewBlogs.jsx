import Blogs from "../components/Blogs"
import Layout from "../components/Layout";

function ViewBlogs() {
    return (
    <Layout>
    <main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
        <h2 style={{paddingTop: "80px", paddingBottom: "40px"}}>View blogs</h2>
        <Blogs />
        </div>
        </main>
        </Layout>
    );
}

export default ViewBlogs;