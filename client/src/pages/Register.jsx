import LocalRegisterForm from "../components/LocalRegisterForm"
import Layout from "../components/Layout";

export default function Register() {
    return (
        <Layout>
        <main className="gradient-background" style={{justifyContent: "start"}}>
            <h1 style={{paddingTop: "80px", paddingBottom: "40px"}}>Sign up</h1>
            <div className="content">
            <LocalRegisterForm />
            </div>
        </main>
        </Layout>
    );
}