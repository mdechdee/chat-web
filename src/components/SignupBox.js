import { Card, Button, Container, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const SignupBox = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let history = useHistory();
    const signup = async () => {
        console.log("aaa");
        try{
            const res = await axios.post('http://localhost:5000/api/auth/signup',
                {
                    username,password
                });
            history.push({
                pathname: '/login',
                state: {
                    message: "You successfully registered."
                }
            })
        } catch (err) {
            setError(err.message);
        }
    }
    return (
        <div>
            <Container>
                {(error) ? <p>{error}</p> : <p></p>}
                <TextField id="username" label="Username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
                <TextField id="password" label="Password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                <Button onClick={signup}>Sign up</Button>
            </Container>
        </div>
    )
}
export default SignupBox;