import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handlelogin =() =>{
    loginWithRedirect({ appState:{returnTo: "/dashboard"}});
  };
  return <button onClick={handlelogin}>Log In</button>;
};

export default LoginButton;