import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login() {
    const [state, setState] = useState({email:"", password:""});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(state);
        navigate("/login");
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setState({
            ...state,
            email:e.target.value
        });
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setState({
            ...state,
            password: e.target.value
        });
    }

    return (
            <div className="login-signUp-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                        <div className="input-field">
                            <input type="email" placeholder="Email" autoComplete="nope" onChange={handleEmail}/>
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" autoComplete="new-password" onChange={handlePassword}/>
                        </div>
                        {/*<a href="#" className="link">Forgot Your Password?</a>*/}
                        <Link to={"/register"} className={"link"}>New User</Link>
                    </div>
                    <div className="action">
                        <button onClick={handleLogin}>Sign in</button>
                    </div>
                </form>
            </div>
    );
}
export default Login;