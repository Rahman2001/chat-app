function SignUp() {
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
                    <a href="#" className="link">Have an account?</a>
                </div>
                <div className="action">
                    <button>Register</button>

                </div>
            </form>
        </div>
    );
}

export default SignUp;