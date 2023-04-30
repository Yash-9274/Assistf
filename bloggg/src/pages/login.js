import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import GoogleAuthButton from "./GoogleButton.js";
import "./homepage.css";
import "./homepage.js"

const Login = () => {
const navigate = useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const onUsernameChange = useCallback((event) => {
setUsername(event.target.value);
}, []);

const onPasswordChange = useCallback((event) => {
setPassword(event.target.value);
}, []);

const onFormSubmit = useCallback(
(event) => {
event.preventDefault();
// Check if the entered username and password are correct
if (username === "test123" && password === "test123@") {
navigate("/homepage");


} else {
alert("Incorrect username or password");
}
},
[navigate, username, password]
);



const onSignUp1Click = useCallback(() => {
navigate("/sign-up");
}, [navigate]);

return (
<div className="login2">
<div className="login-child" />
<img className="icon1" alt="" src="/270-1@2x.png" />
<form className="frame-parent" onSubmit={onFormSubmit}>
<div className="schoolify-parent">
<div className="schoolify1">Assistace</div>
{/* <img className="book-reader-icon1" alt="" src="/bookreader.svg" /> */}
</div>
<input
       className="frame-child"
       type="text"
       placeholder="Username"
       maxLength={12}
       minLength={5}
       required
       value={username}
       onChange={onUsernameChange}
     />
<input
       className="frame-item"
       type="password"
       placeholder="Password"
       maxLength={8}
       minLength={8}
       required
       value={password}
       onChange={onPasswordChange}
     />
<button
       className="rectangle-container"
       autoFocus
       id="login"
       type="submit"
     >
<div className="frame-inner" />
<b className="login3">Login</b>
</button>
<div className="login4">LOGIN</div>
<div className="dont-have-an">Don’t have an account? </div>
<div className="or-login-with">OR Login with</div>
<div className="forgot-password">Forgot Password?</div>
<Link className="sign-up1" to="/sign-up">
Sign Up
</Link>
<Link className="sign-up1" to="/sign-up" onClick={onSignUp1Click}>
Sign Up
</Link>
<img className="line-icon" alt="" src="/line-1.svg" />
<div className="line-div" />
</form>
<GoogleAuthButton/>
<img className="vector-icon" alt="" src="/vector.svg" />
</div>
);
};

export default Login;