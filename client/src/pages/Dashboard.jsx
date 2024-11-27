import Layout from "../components/Layout";

export default function Dashboard() {
    const username = localStorage.getItem('user');
    return (<Layout>
    <main className="gradient-background" style={{justifyContent: "start"}}>
        <div className="content">
    <h2 style={{paddingTop: "80px", paddingBottom: "40px"}} >Welcome back, {username}</h2>
    </div>
    </main>
    </Layout>
    );
}