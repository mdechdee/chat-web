import { useTheme } from '@emotion/react';
import {React} from 'react'
import {
 Button, Flex,
} from 'rebass'
import { Input } from '@rebass/forms'



const GroupJoinBox = props => {
  const theme = useTheme();

  const joinGroup = () => {

  };

  return(
    <Flex theme={theme} sx={{'> *': {mx: '1em'}}}>
      <Input
          id='group_id'
          name='group_id'
          type='id'
          theme={theme}
      />
      <Button
      onClick={joinGroup} 
      theme={theme}> 
        Join Group 
      </Button>
    </Flex>
  );
}

export default GroupJoinBox;