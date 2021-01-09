import { useTheme } from '@emotion/react';
import { React, useState } from 'react';
import { Button, Heading, Card } from 'rebass';
import { Input } from '@rebass/forms';
import { useAuth } from './authentication/Auth.js';

const LoginBox = props => {
  const auth = useAuth();
  console.log(auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    auth.signin({ username, password }, () => {
      console.log(`User ${username} is logging in`);
    });
  };

  const logout = () => {
    auth.signout(() => {
      console.log(`User ${username} is logging out`);
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          id='password'
          name='password'
          type='password'
          theme={theme}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button theme={theme} onClick={login} sx={{ mt: '1em' }}>Login</Button>
        <Button theme={theme} onClick={logout} sx={{ mt: '1em' }}>Logout</Button>
      </Card>
    </>
  );
}

export default LoginBox;