import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"

import LocalLoginForm from "../components/LocalLoginForm"
import Layout from "../components/Layout";

function Login() {
    return (
        <Layout>
        <div className="gradient-background">
        <div className="login">
        <h1 className="loginTitle">Chose Login Method</h1>
            <div className="wrapper">
                <div className="left">
                <div className="loginButton google">
                <img src={Google} alt="" className="icon" />
                Google
                </div>
                <div className="loginButton facebook">
                <img src={Facebook} alt="" className="icon" />
                Facebook
                </div>
                <div className="loginButton github">
                <img src={Github} alt="" className="icon" />
                Github
                </div>
                </div>

                <div className="line" />
                <div className="or">OR</div>


                <div className="right">
                <LocalLoginForm />
                </div>
            </div>
            </div>
            </div>
            </Layout>
    )
}

export default Login;