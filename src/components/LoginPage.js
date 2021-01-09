import { useTheme } from '@emotion/react';
import { React } from 'react';
import { Heading, Text, Box } from 'rebass';
import { useAuth } from './authentication/Auth.js'
import LoginBox from './LoginBox';
import { Redirect, useLocation } from "react-router-dom";


const LoginPage = props => {
  let auth = useAuth();
  const theme = useTheme();
  const location = useLocation();
  console.log(props);
  if (auth.user) {
    return (<Redirect to="/join_group" />);
  }
  else {
    return (
      <Box theme={theme} variant='flexColumn'>
        {location.state !== undefined && "message" in location.state ? <p>{location.state.message}</p> : <p></p>}
        <Text theme={theme} variant='subtitle'>Sign in to</Text>
        <Heading theme={theme} variant='title' sx={{fontSize: 7}}> ChatWithMe </Heading>
        <LoginBox />
      </Box>
    );
  }
}

export default LoginPage;