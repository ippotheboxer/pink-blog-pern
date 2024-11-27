import SpecificBlog from "../components/SpecifcBlog";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function FullPageBlog() {
    const { id } = useParams();
    return (
    <Layout>
    <main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
            <SpecificBlog id={id}/>
            </div>
            </main>
    </Layout>
    );
}

export default FullPageBlog;