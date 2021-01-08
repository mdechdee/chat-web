import { React } from 'react'
import { useAuth } from './authentication/Auth.js'
import LoginBox from './LoginBox';
import { Redirect, useLocation } from "react-router-dom";

const LoginPage = props => {
  let auth = useAuth();
  const location = useLocation();
  console.log(props);
  if (auth.user) {
    return (<Redirect to="/join_group" />);
  }
  else {
    return (
      <>
        { "message" in location ? <p>{location.message}</p> : <p></p>}
        <LoginBox />
      </>
    );
  }
}

export default LoginPage;