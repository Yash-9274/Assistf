import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-up.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const onGroupButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    checkAllFieldsFilled();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    checkAllFieldsFilled();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    checkAllFieldsFilled();
  };

  const checkAllFieldsFilled = () => {
    if (email && password && username) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  return (
    <div className="sign-up">
      <div className="sign-up-child" />
      <div className="schoolify">Schoolify</div>
      {/* <img className="book-reader-icon" alt="" src="/bookreader.svg" /> */}
      <input
        className="sign-up-item"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="sign-up-inner"
        type="password"
        placeholder="Password"
        maxLength={8}
        minLength={8}
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        className="rectangle-input"
        type="text"
        placeholder="Username"
        maxLength={12}
        minLength={5}
        required
        value={username}
        onChange={handleUsernameChange}
      />
      <button
        className="rectangle-parent"
        autoFocus
        id="Sign-In"
        onClick={onGroupButtonClick}
        disabled={!allFieldsFilled} // disable the button if not all fields are filled
      >
        <div className="group-child" />
        <b className="login">LOGIN</b>
      </button>
      <button className="rectangle-group">
        <button className="group-item" />
        <b className="google-sign-up">Google Sign up</b>
      </button>
      <div className="create-an-account">Create an Account</div>
      <div className="already-have-an">Already have an account ?</div>
      <Link className="login1" to="/" onClick={onLoginClick}>
        Login
      </Link>
      <img className="icon" alt="" src="/27-1@2x.png" />
    </div>
  );
};

export default SignUp;
