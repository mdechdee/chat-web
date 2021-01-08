import { Card, Button, Container, TextField } from '@material-ui/core';

const SignupBox = () => {
    return (
        <div>
            <Container>
                <TextField id="username" label="Username"/>
                <TextField id="password" label="Password"/>
            </Container>
        </div>
    )
}
export default SignupBox;