import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axiosHarperReq from "./axiosHarperReq";

function SignUp({handleCookies}) {
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({lastName:"", firstName:"", email:"", password:""});
    const [isUnique, setIsUnique] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        let res = axiosHarperReq(`select * from chat_app.users where email =\"${inputState.email}\"`)
            .then(res => {
                return res;
            });
        res.then(res => {
            if(res.status === 400) {
                setErrorMessage("");
                setIsUnique(true);
            }else {
                setIsUnique(false);
                setErrorMessage("Email already exists!");
            }
        });
        if(isUnique) {
            res = axiosHarperReq('insert into chat_app.users (firstName, lastName, email, password) ' +
                `values(\"${inputState.firstName}\", \"${inputState.lastName}\", \"${inputState.email}\", \"${inputState.password}\")`)
                .then(res => {return res;});
            
            res.then(res => {
                if(res.status === 200) {
                    let tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate()+1);
                    handleCookies("chatUser", inputState, {expires:tomorrow});
                    navigate('/');
                }else {
                    setErrorMessage("Error has occurred during account creation! Please, try again.")
                }
            })
        }
    }
    const handleLastName = (e) => {
        e.preventDefault();
        setInputState({...inputState, lastName: e.target.value});
    }
    const handleFirstName = (e) => {
        e.preventDefault();
        setInputState({...inputState, firstName: e.target.value});
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setInputState({...inputState, email: e.target.value});
    }
    const handlePassword = (e) => {
        e.preventDefault();
        setInputState({...inputState, password: e.target.value});
    }

    return (
        <div className="login-signUp-form">
            <form>
                <h1>Register</h1>
                <div className="content">
                    {isUnique && <div className={"login-error"}>{errorMessage}</div>}
                    <div className="input-field">
                        <input type="last-name" placeholder="Last Name" autoComplete="nope" onChange={handleLastName}/>
                    </div>
                    <div className="input-field">
                        <input type="first-name" placeholder="First Name" autoComplete="nope" onChange={handleFirstName}/>
                    </div>
                    <div className="input-field">
                        {!isUnique && <div className="login-error">{errorMessage}</div> }
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