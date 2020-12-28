import { React } from 'react'
import { useAuth } from './authentication/Auth.js'
import LoginBox from './LoginBox';
import {
  Redirect
} from "react-router-dom";

const LoginPage = props => {
  let auth = useAuth();

  if (auth.user) {
    return (<Redirect to="/join_group" />);
  }
  else {
    return (<LoginBox />);
  }
}

export default LoginPage;