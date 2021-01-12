import { React } from 'react';
import { Button, Text, Box, Flex, Heading } from 'rebass';
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
            
            <Box theme={theme} sx={{
                margin: '50px',
                padding: '10px',
                height: '200px'
            }}>
                <Heading theme={theme} variant='title' sx={{fontSize: 7,textAlign:'center'}}> ChatWithMe </Heading>
                <Text theme={theme} variant='subtitle' sx={{textAlign:'center'}}> A simple chat website for everyone </Text>
            </Box>
            <Button theme={theme} variant='outline' onClick={signup} sx={{ mt: '1em' }}>Sign up</Button>
            <Button theme={theme} variant='outline' onClick={signin} sx={{ mt: '1em' }}>Login</Button>
            
        </>
    );
}

export default VisitorPage;