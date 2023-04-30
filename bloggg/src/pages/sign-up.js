import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign-up.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const onGroupButtonClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    checkAllFieldsFilled();
    validateEmail(emailValue);
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    checkAllFieldsFilled();
    checkPasswordStrength(passwordValue);
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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const checkPasswordStrength = (password) => {
    // Check password strength and set the password strength state accordingly
    if (password.length < 8) {
      setPasswordStrength("Weak");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  return (
    <div className="sign-up">
      <div className="sign-up-child" />
      <div className="schoolify">Assistance</div>
      {/* <img className="book-reader-icon" alt="" src="/bookreader.svg" /> */}
      <input
        className="sign-up-item"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={handleEmailChange}
      />
      {!isEmailValid && <div className="invalid-email">Invalid email format</div>}
      <input
        className="sign-up-inner"
        type="password"
        placeholder="Password"
        maxLength={20}
        minLength={8}
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="password-strength">{passwordStrength}</div>
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
        disabled={!allFieldsFilled || !isEmailValid} // disable the button if not all fields are filled or email is invalid
      >
        <div className="group-child" />
        <b className="login">LOGIN</b>
      </button>
     
      <div className="create-an-account">Create an Account</div>
      <div className="already-have-an">Already have an account?</div>
      <Link className="login1" to="/" onClick={onLoginClick}>
        Login
      </Link>
      <img className="icon" alt="" src="/27-1@2x.png" />
    </div>
  );
};

export default SignUp;
