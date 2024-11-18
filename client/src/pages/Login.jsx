import Google from "../img/google.png"
import Facebook from "../img/facebook.png"
import Github from "../img/github.png"

function Login() {
    return (
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
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="Password"/>
                <button className="submit">Login</button>
                </div>
            </div>
            </div>
            </div>
    )
}

export default Login;