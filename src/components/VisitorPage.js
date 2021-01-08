import { React } from 'react';
import { useAuth } from './authentication/Auth.js';
import { Redirect } from "react-router-dom";
import { Button } from 'rebass';
import { useTheme } from '@emotion/react';
import { useHistory } from 'react-router-dom';

const VisitorPage = props => {
    let history = useHistory();
    const signup = () => {
        console.log("signup clicked");
        history.push({
            pathname: '/signup'
        });
    }
    const signin = () => {
        history.push({
            pathname: '/login'
        });
    }
    const theme = useTheme();
    return (
        <>
            <Button theme={theme} onClick={signup} sx={{ mt: '1em' }}>Sign up</Button>
            <Button theme={theme} onClick={signin} sx={{ mt: '1em' }}>Login</Button>
        </>
    );
}

export default VisitorPage;