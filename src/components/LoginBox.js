import { useTheme } from '@emotion/react';
import { React, useState } from 'react';
import { Button, Flex, Box } from 'rebass';
import { Input, Label } from '@rebass/forms';
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
      <Box theme={theme} variant='flexColumn' width={0.8}>
        <Box theme={theme} sx={{my: 4}}>
          <Label theme={theme}>Username</Label>
          <Input
            id='id'
            name='id'
            type='id'
            theme={theme}
            value={username}
            sx={{mb: 3}}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Label theme={theme}>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            theme={theme}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </Box>
        <Button theme={theme} variant='outline' onClick={login} >Sign In</Button>
      </Box>
    </>
  );
}

export default LoginBox;