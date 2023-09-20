import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

function SignUp() {
    const navigate = useNavigate();
    const [state, setState] = useState({lastName:"", firstName:"", email:"", password:""});

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(state);
        navigate("/register");
    }
    const handleLastName = (e) => {
        e.preventDefault();
        setState({...state, lastName: e.target.value});
    }
    const handleFirstName = (e) => {
        e.preventDefault();
        setState({...state, firstName: e.target.value});
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setState({...state, email: e.target.value});
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setState({...state, password: e.target.value});
    }

    return (
        <div className="login-signUp-form">
            <form>
                <h1>Register</h1>
                <div className="content">
                    <div className="input-field">
                        <input type="last-name" placeholder="Last Name" autoComplete="nope" onChange={handleLastName}/>
                    </div>
                    <div className="input-field">
                        <input type="first-name" placeholder="First Name" autoComplete="nope" onChange={handleFirstName}/>
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope" onChange={handleEmail}/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password" onChange={handlePassword}/>
                    </div>
                    <Link to={"/login"} className="link">Have an account?</Link>
                </div>
                <div className="action">
                    <button onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;