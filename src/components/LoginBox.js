import { useTheme } from '@emotion/react';
import { React } from 'react'
import {
  Button,
  Card,
  Heading,
} from 'rebass'
import { Input } from '@rebass/forms'
import { useAuth } from './authentication/Auth.js'

const LoginBox = props => {
  const auth = useAuth();

  const login = () => {
    auth.signin(() => {
      console.log("CB_signin");
    });
  };

  const logout = () => {
    auth.signout(() => {
      console.log("CB_signout");
    });
  };

  const theme = useTheme();

  return (
    <>
      <Card theme={theme}>
        <Heading theme={theme}>Login</Heading>
        <Input
          id='id'
          name='id'
          type='id'
          theme={theme}
        ></Input>
        <Button theme={theme} onClick={login} sx={{ mt: '1em' }}>Login</Button>
        <Button theme={theme} onClick={logout} sx={{ mt: '1em' }}>Logout</Button>
      </Card>
    </>
  );
}

export default LoginBox;