import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <C.Button onClick={handleSignin}>Login com Google</C.Button>
    </C.Container>
  );
};

export default Login;
