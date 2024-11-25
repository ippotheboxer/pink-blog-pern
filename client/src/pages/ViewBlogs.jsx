import Blogs from "../components/Blogs"

function ViewBlogs() {
    return (<main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
        <h2>View blogs</h2>
        <Blogs />
        </div>
        </main>
    );
}

export default ViewBlogs;