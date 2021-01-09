import { React } from 'react';
import { Button, Text, Box, Flex } from 'rebass';
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
            <Flex
                sx={{
                flexDirection: 'column'
            }}>
                <Box p={120}>
                    <Text fontSize='5em' fontWeight='bold' textAlign='center' > ChatWithMe </Text>
                    <Text fontSize='2em' textAlign='center'> A simple chat website for everyone </Text>
                </Box>
                <Button theme={theme} onClick={signup} sx={{ mt: '1em' }}>Sign up</Button>
                <Button theme={theme} onClick={signin} sx={{ mt: '1em' }}>Login</Button>
            </Flex>
        </>
    );
}

export default VisitorPage;