import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axiosHarperReq from "./axiosHarperReq";

function Login() {
    const [inputState, setInputState] = useState({email:"", password:""});
    const [loginState, setLoginState] = useState('');
    const [response, setResponse] = useState({});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let res = axiosHarperReq(`select * from chat_app.users where email = "${inputState.email}" and password="${inputState.password}"`)
            .then(res=> {
                return res;
            });
        res.then(res => {
            if(res.status === 200) {
                setResponse({status:res.status, data:res.data[0]});
            }else {
                setResponse(res);
            }
        });

    }
    const handleEmail = (e) => {
        e.preventDefault();
        setInputState({
            ...inputState,
            email:e.target.value
        });
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setInputState({
            ...inputState,
            password: e.target.value
        });
    }
    useEffect(() => {
        console.log(response);
        if(response) {
            if(response.status===200 && response.data.email === inputState.email
                && response.data.password === inputState.password) {
                setLoginState('');
            }else if(response.status === 400) {
                setLoginState('Email or/and password is incorrect!');
            }
        }
    }, [response]);
    return (
            <div className="login-signUp-form">
                <form>
                    <h1>Login</h1>
                    <div className="content">
                        {loginState && <div className="login-error">{loginState}</div>}
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