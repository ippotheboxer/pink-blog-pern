import EditBlogForm from "../components/EditBlogForm";
import { useParams } from "react-router-dom";

export default function EditBlog() {
    const { id } = useParams();
    return (
        <main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
        <h2 style={{paddingTop: "80px", paddingBottom: "40px"}} >Edit blog</h2>
        <EditBlogForm id={ id } />
        </div>
    </main>
    )
}