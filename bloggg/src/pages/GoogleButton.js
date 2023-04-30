import React from "react";
import GoogleLogin from "react-google-login";
import "./login.css";

const GoogleAuthButton = () => {
  const handleLoginSuccess = (response) => {
    console.log(response)
    const { accessToken } = response.tokenObj;
    sessionStorage.setItem('accessToken', accessToken); // TODO: Implement success handling logic
  };

  const handleLoginFailure = (error) => {
    console.error(error); // TODO: Implement failure handling logic
  };

  return (
    <GoogleLogin
      clientId="1081086113702-c6nr2s3ubdmglgb2ojsv8u06ji9e7lsu.apps.googleusercontent.com"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
      className="google-auth-button"
      render={(renderProps) => (
        <>
          <button className="group-button" onClick={renderProps.onClick}>
          <button className="group-inner" />
          <b className="google-log-in">Google</b>
          </button>
        </>
      )}
    />
  );
};

export default GoogleAuthButton;
