import {Link} from "react-router-dom";

function SignUp({handleRegister}) {
    return (
        <div className="login-signUp-form">
            <form>
                <h1>Register</h1>
                <div className="content">
                    <div className="input-field">
                        <input type="last-name" placeholder="Last Name" autoComplete="nope"/>
                    </div>
                    <div className="input-field">
                        <input type="first-name" placeholder="First Name" autoComplete="nope"/>
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope"/>
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password"/>
                    </div>
                    <Link to={"login"} className="link">Have an account?</Link>
                </div>
                <div className="action">
                    <button onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;