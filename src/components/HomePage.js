import { React } from 'react'
import { useTheme } from '@emotion/react';
import { Button } from 'rebass';

const createGroup = () => {}
const joinGroup = () => {}

const HomePage = props => {
    const theme = useTheme();
    return (
        <div>
            <Button theme={theme} onClick={createGroup} sx={{ mt: '1em' }}>Create a group</Button>
            <Button theme={theme} onClick={joinGroup} sx={{ mt: '1em' }}>Join a group</Button>
        </div>
    );
}

export default HomePage;