import SpecificBlog from "../components/SpecifcBlog";
import { useParams } from "react-router-dom";

function FullPageBlog() {
    const { id } = useParams();
    return <main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
            <SpecificBlog id={id}/>
    </div>
    </main>
}

export default FullPageBlog;