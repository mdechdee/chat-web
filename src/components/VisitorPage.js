import { React } from 'react';
import { useAuth } from './authentication/Auth.js';
import { Redirect } from "react-router-dom";
import { Button } from 'rebass';
import { useTheme } from '@emotion/react';


const VisitorPage = props => {
    const signup = () => {
        console.log("signup clicked");
        return (<Redirect to="/signup" />);
    }
    const signin = () => {
        return (<Redirect to="/login" />);
    }
    const theme = useTheme();
    return (
        <div id = "button">
            <Button theme={theme} onClick={signup} sx={{ mt: '1em' }}>Sign up</Button>
            <Button theme={theme} onClick={signin} sx={{ mt: '1em' }}>Login</Button>
        </div>
    );
}

export default VisitorPage;